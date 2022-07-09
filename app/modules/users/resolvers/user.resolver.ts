export const userResolver = {
  Query: {
    user: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getTtem(id);
      return res;
    },
  },

  User: {
    id: (parent: { _id: string }) => parent._id,
  },
};
