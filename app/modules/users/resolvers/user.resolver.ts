import { ApolloError } from 'apollo-server';
import { LoginInput, NewUser } from '../user.types';

export const userResolver = {
  Query: {
    user: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.usersSource.getUser(id);
      return res;
    },
    login: async (_: null, { email, password }: LoginInput, { dataSources }: any) => {
      const res = await dataSources.usersSource.login(email, password);
      return res;
    },
  },

  Mutation: {
    register: async (
      _: null,
      { firstName, lastName, email, password }: NewUser,
      { dataSources }: any,
    ) => {
      const res = await dataSources.usersSource.register(firstName, lastName, email, password);
      return res;
    },
  },

  User: {
    id: (parent: { _id: string }) => parent._id,
  },
};
