export const favouritesResolver = {
  Query: {
    favourites: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.getItems();
      return res;
    },
  },

  Favourites: {
    id: ({ _id }: { _id: string }) => _id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.bandsSource.getItemsById(bandsIds);
      return res;
    },
    genres: async ({ genresIds }: { genresIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.genresSource.getItemsById(genresIds);
      return res;
    },
    artists: async ({ artistsIds }: { artistsIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.artistsSource.getItemsById(artistsIds);
      return res;
    },
    tracks: async ({ tracksIds }: { tracksIds: string[] }, _: null, { dataSources }: any) => {
      const res = await dataSources.tracksSource.getItemsById(tracksIds);
      return res;
    },
  },
};
