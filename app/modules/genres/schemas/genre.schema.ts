import { gql } from 'apollo-server';

export const genreTypeDefs = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genres(limit: Int, offset: Int): [Genre]
    genre(id: ID!): Genre
  }

  type Mutation {
    createGenre(input: NewGenreInput!): Genre
    deleteGenre(id: ID!): deleteResponse
    updateGenre(id: ID!, input: GenreInput!): Genre
  }

  input NewGenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }

  input GenreInput {
    name: String
    description: String
    country: String
    year: Int
  }
`;
