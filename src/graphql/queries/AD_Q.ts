import { gql } from '@apollo/client';

export const AD_Q = gql`
  query Ad($adId: ID!) {
    ad(where: { id: $adId }) {
      id
      title
    }
  }
`;
