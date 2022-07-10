import { ApolloError } from "apollo-server";
import { ArtistInput, NewArtistInput } from "../artist.types";

export const artistResolver = {
  Query: {
    artists: async (
      _: any,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.artistsSource.getItems(limit, offset);
      return res;
    },
    artist: async (_: any, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.artistsSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createArtist: async (_: null, { input }: { input: NewArtistInput }, { dataSources }: any) => {
      try {
        const res = await dataSources.artistsSource.createItem(input);
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

    updateArtist: async (
      _: null,
      { id, input }: { id: string; input: ArtistInput },
      { dataSources }: any,
    ) => {
      try {
        const res = await dataSources.artistsSource.updateItem(id, input);
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

    deleteArtist: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      try {
        const res = await dataSources.artistsSource.deleteItem(id);
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

  Artist: {
    id: (parent: { _id: string }) => parent._id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getItemsById(bandsIds);
      return res;
    },
  },
};
