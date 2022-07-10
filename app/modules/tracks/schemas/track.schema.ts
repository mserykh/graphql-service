import { gql } from 'apollo-server';

export const trackTypeDefs = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
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
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  input TrackInput {
    title: String
    albumId: String
    bandsIds: [String]
    artistsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }
`;
