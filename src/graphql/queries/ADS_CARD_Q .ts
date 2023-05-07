import { gql } from '@apollo/client';

export const ADS_CARD_Q = gql`
  query SearchAds {
    ads{
      id
      title
      price
      coverImg {
        url
      }
    }
  }
`;
