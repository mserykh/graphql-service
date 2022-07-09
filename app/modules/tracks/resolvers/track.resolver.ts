export const trackResolver = {
  Query: {
    tracks: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItems();
      return res;
    },
    track: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItem(id);
      return res;
    },
  },

  Track: {
    id: (parent: { _id: string }) => parent._id,
  },
};
