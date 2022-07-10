import { gql } from 'apollo-server';

export const commonTypeDefs = gql`
  type deleteResponse {
    acknowledged: Boolean
    deletedCount: Int
  }
`;
