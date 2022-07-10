import { FavouriteItemType } from '../favourites.types';

export const favouritesResolver = {
  Query: {
    favourites: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.getItems();
      return res;
    },
  },

  Mutation: {
    addTrackToFavourites: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.addItem(FavouriteItemType.tracks, id);
      return res;
    },
    addBandToFavourites: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.addItem(FavouriteItemType.bands, id);
      return res;
    },
    addArtistToFavourites: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.addItem(FavouriteItemType.artists, id);
      return res;
    },
    addGenreToFavourites: async (_: null, { id }: { id: string }, { dataSources }: any) => {
      const res = await dataSources.favouritesSource.addItem(FavouriteItemType.genres, id);
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
