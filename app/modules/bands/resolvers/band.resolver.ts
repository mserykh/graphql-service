export const bandResolver = {
  Query: {
    bands: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getItems();
      return res;
    },
    band: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getTtem(id);
      return res;
    },
  },

  Band: {
    id: (parent: { _id: string }) => parent._id,
  },
};
