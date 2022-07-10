import { gql } from 'apollo-server';

export const bandTypeDefs = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instruments: String
    years: [String]
  }

  type Query {
    bands(limit: Int, offset: Int): [Band]
    band(id: ID!): Band
  }

  type Mutation {
    createBand(input: NewBandInput!): Band
    updateBand(id: ID!, input: BandInput!): Band
    deleteBand(id: ID!): deleteResponse
  }

  input NewBandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  input MemberInput {
    artist: String
    instruments: String
    years: [String]
  }
`;
