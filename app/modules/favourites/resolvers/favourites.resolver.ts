export const favouritesResolver = {
  Query: {
    favourites: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.getItems();
      return res;
    },
  },

  Favourites: {
    id: (parent: { _id: string }) => parent._id,
  },
};
