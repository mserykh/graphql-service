export const albumResolver = {
  Query: {
    albums: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.albumsSource.getItems();
      return res;
    },
    album: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.albumsSource.getTtem(id);
      return res;
    },
  },

  Album: {
    id: (parent: { _id: string }) => parent._id,
  },
};
