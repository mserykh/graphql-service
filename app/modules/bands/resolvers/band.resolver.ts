import { ApolloError } from 'apollo-server';
import { MemberInput } from '../band.types';

export const bandResolver = {
  Query: {
    bands: async (
      _: null,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.bandsSource.getItems(limit, offset);
      return res;
    },
    band: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createBand: async (_: null, { input }: { input: MemberInput }, { dataSources }: any) => {
      try {
        const res = await dataSources.bandsSource.createItem(input);
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

    updateBand: async (
      _: null,
      { id, input }: { id: string; input: MemberInput },
      { dataSources }: any,
    ) => {
      try {
        const res = await dataSources.bandsSource.updateItem(id, input);
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

    deleteBand: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      try {
        const res = await dataSources.bandsSource.deleteItem(id);
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

  Band: {
    id: ({ _id }: { _id: string }) => _id,
    genres: async ({ genresIds }: { genresIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.genresSource.getItemsById(genresIds);
      return res;
    },
  },
};
