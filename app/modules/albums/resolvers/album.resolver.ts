import { ApolloError } from 'apollo-server';
import { AlbumInput, NewAlbumInput } from '../album.types';

export const albumResolver = {
  Query: {
    albums: async (
      _: null,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.albumsSource.getItems({ limit, offset });
      return res;
    },
    album: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.albumsSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createAlbum: async (_: null, { input }: { input: NewAlbumInput }, { dataSources }: any) => {
      try {
        const res = await dataSources.albumsSource.createItem(input);
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

    updateAlbum: async (
      _: null,
      { id, input }: { id: string; input: AlbumInput },
      { dataSources }: any,
    ) => {
      try {
        const res = await dataSources.albumsSource.updateItem(id, input);
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

    deleteAlbum: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      try {
        const res = await dataSources.albumsSource.deleteItem(id);
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

  Album: {
    id: ({ _id }: { _id: string }) => _id,
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
    tracks: async ({ tracksIds }: { tracksIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItemsById(tracksIds);
      return res;
    },
  },
};
