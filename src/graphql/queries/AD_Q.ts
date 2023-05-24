import { gql } from '@apollo/client';

export const AD_Q = gql`
  query Ad($adId: ID!) {
    ad(where: { id: $adId }) {
      id
      title
      price
      description
      coverImg {
        id
        url
      }
      images {
        file {
          id
          url
        }
      }
      views
      address {
        id
        addressLine1
      }
      seller {
        id
        user {
          id
          name
          createdAt
        }
        firstName
        phoneNumber
        avatar {
          id
          url
        }
      }
    }
  }
`;
