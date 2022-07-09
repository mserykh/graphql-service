export const artistResolver = {
  Query: {
    artists: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.artistsSource.getItems();
      return res;
    },
    artist: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.artistsSource.getItem(id);
      return res;
    },
  },

  Artist: {
    id: (parent: { _id: string }) => parent._id,
  },
};
