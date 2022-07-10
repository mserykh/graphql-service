import { ApolloError } from 'apollo-server';
import { NewTrackInput, TrackInput } from '../track.types';

export const trackResolver = {
  Query: {
    tracks: async (
      _: null,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.tracksSource.getItems(limit, offset);
      return res;
    },
    track: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createTrack: async (_: null, { input }: { input: NewTrackInput }, { dataSources }: any) => {
      try {
        const res = await dataSources.tracksSource.createItem(input);
        return res;
      } catch (err) {
        const error = err as ApolloError;
        return {
          code: error.extensions.response.code,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },

    updateTrack: async (
      _: null,
      { id, input }: { id: string; input: TrackInput },
      { dataSources }: any,
    ) => {
      try {
        const res = await dataSources.tracksSource.updateItem(id, input);
        return res;
      } catch (err) {
        const error = err as ApolloError;
        return {
          code: error.extensions.response.code,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },

    deleteTrack: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      try {
        const res = await dataSources.tracksSource.deleteItem(id);
        return res;
      } catch (err) {
        const error = err as ApolloError;
        return {
          code: error.extensions.response.code,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },

  Track: {
    id: (parent: { _id: string }) => parent._id,
    album: async ({ albumId }: { albumId: string }, _: null, { dataSources }: any) => {
      const res = await dataSources.albumsSource.getItem(albumId);
      return res;
    },
    artists: async ({ artistsIds }: { artistsIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.artistsSource.getItemsById(artistsIds);
      return res;
    },
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getItemsById(bandsIds);
      return res;
    },
    genres: async ({ genresIds }: { genresIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.genresSource.getItemsById(genresIds);
      return res;
    },
  },
};
