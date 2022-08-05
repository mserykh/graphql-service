import { ApolloError } from 'apollo-server';
import { GenreInput, NewGenreInput } from '../genre.types';

export const genreResolver = {
  Query: {
    genres: async (
      _: null,
      { limit, offset }: { limit: number; offset: number },
      { dataSources }: any,
    ) => {
      const res = await dataSources.genresSource.getItems(limit, offset);
      return res;
    },
    genre: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.genresSource.getItem(id);
      return res;
    },
  },

  Mutation: {
    createGenre: async (_: null, { input }: { input: NewGenreInput }, { dataSources }: any) => {
      try {
        const res = await dataSources.genresSource.createItem(input);
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

    updateGenre: async (
      _: null,
      { id, input }: { id: string; input: GenreInput },
      { dataSources }: any,
    ) => {
      try {
        const res = await dataSources.genresSource.updateItem(id, input);
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

    deleteGenre: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      try {
        const res = await dataSources.genresSource.deleteItem(id);
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

  Genre: {
    id: ({ _id }: { _id: string }) => _id,
  },
};
