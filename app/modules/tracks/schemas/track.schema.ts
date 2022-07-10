import { gql } from 'apollo-server';

export const trackTypeDefs = gql`
  type Track {
    id: ID!
    title: String!
    bands: [Band]
    artists: [Artist]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks(limit: Int, offset: Int): [Track]
    track(id: ID!): Track
  }

  type Mutation {
    createTrack(input: NewTrackInput!): Track
    updateTrack(id: ID!, input: TrackInput!): Track
    deleteTrack(id: ID!): deleteResponse
  }

  input NewTrackInput {
    title: String!
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  input TrackInput {
    title: String!
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }
`;
