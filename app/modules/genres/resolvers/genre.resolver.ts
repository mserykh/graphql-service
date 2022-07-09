export const genresResolver = {
  Query: {
    genres: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.genresSource.getItems();
      return res;
    },
    genre: async (_: any, id: string, { dataSources }: any) => {
      const res = await dataSources.genresSource.getTtem(id);
      return res;
    },
  },

  Genre: {
    id: (parent: { _id: string }) => parent._id,
  },
};
