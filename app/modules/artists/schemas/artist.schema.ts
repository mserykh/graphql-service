import { gql } from 'apollo-server';

export const artistTypeDefs = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Query {
    artists(limit: Int, offset: Int): [Artist]
    artist(id: ID!): Artist
  }

  type Mutation {
    createArtist(input: NewArtistInput!): Artist
    updateArtist(id: ID!, input: ArtistInput!): Artist
    deleteArtist(id: ID!): deleteResponse
  }

  input NewArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  input ArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }
`;
