export const userResolver = {
  Query: {
    user: async (_: any, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.usersSource.getUser(id);
      return res;
    },
    login: async (
      _: null,
      { email, password }: { email: string; password: string },
      { dataSources }: any,
    ) => {
      const res = await dataSources.usersSource.login(email, password);
      return res;
    },
  },

  User: {
    id: (parent: { _id: string }) => parent._id,
  },
};
