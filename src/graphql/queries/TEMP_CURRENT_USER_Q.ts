import { gql } from '@apollo/client';

export const TEMP_CURRENT_USER_Q = gql`
  query CurrentUser($userId: ID!) {
    user(where: { id: $userId }) {
      id
      name
      email
      createdAt
      seller {
        id
        firstName
        lastName
        avatar {
          id
          url
        }
        phoneNumber
        ratings
      }
    }
  }
`;
