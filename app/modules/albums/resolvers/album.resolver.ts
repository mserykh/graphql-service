import { ApolloError } from 'apollo-server';
import { NewAlbumInput } from '../album.types';

export const albumResolver = {
  Query: {
    albums: async (
      _: any,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.albumsSource.getItems({ limit, offset });
      return res;
    },
    album: async (_: any, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.albumsSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createAlbum: async (_: any, { input }: { input: NewAlbumInput }, { dataSources }: any) => {
      try {
        const newAlbumInput = { ...input };
        const res = await dataSources.albumsSource.createItem(newAlbumInput);
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
    id: (parent: { _id: string }) => parent._id,
  },
};
