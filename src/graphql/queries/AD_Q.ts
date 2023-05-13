import { gql } from '@apollo/client';

export const AD_Q = gql`
  query Ad($adId: ID!) {
    ad(where: { id: $adId }) {
      id
      title
      price
      description
      coverImg {
        url
      }
      images {
        file {
          url
        }
      }
      views
      address {
        addressLine1
      }
      seller {
        user {
          name
          createdAt
        }
        firstName
        phoneNumber
        avatar {
          url
        }
      }
    }
  }
`;
