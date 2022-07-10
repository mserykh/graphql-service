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
    addTrackToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
  }
`;
