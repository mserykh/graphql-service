import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    password: String
    email: String
  }

  type JWT {
    jwt: String
  }

  type Query {
    user(id: ID!): User
    login(email: String!, password: String!): JWT
  }

  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): User
  }

  input NewUserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }
`;
