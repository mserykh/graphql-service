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
    id: ID!
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
    deleteBand(id: ID!): deleteResponse
    updateBand(id: ID!, input: BandInput!): Band
  }

  input NewBandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID]
  }

  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID]
  }

  input MemberInput {
    artist: String
    instruments: String
    years: [String]
  }
`;
