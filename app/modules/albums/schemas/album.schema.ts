import { gql } from 'apollo-server';

export const albumTypeDefs = gql`
  type Query {
    albums(limit: Int, offset: Int): [Album]
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: NewAlbumInput!): Album
    updateAlbum(id: ID!, input: AlbumInput!): Album
    deleteAlbum(id: ID!): deleteResponse
  }

  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input NewAlbumInput {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
  }

  input AlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
  }
`;
