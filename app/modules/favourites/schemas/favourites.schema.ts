import { gql } from 'apollo-server';

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: String
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favourites: Favourites
  }

  type Mutation {
    addTrackToFavourites(trackId: ID!): Favourites
    addBandToFavourites(bandId: ID!): Favourites
    addArtistToFavourites(artistId: ID!): Favourites
    addGenreToFavourites(genreId: ID!): Favourites
  }
`;
