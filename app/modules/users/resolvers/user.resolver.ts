export const userResolver = {
  Query: {
    users: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItems();
      return res;
    },
    user: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getTtem(id);
      return res;
    },
  },

  User: {
    id: (parent: { _id: string }) => parent._id,
  },
};
