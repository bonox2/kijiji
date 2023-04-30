import { gql } from '@apollo/client';

export const SEARCH_ADS_Q = gql`
  query SearchAds($categoryName: String!) {
    ads(
      where: 
            { category: { name: { equals: $categoryName } } }
    ) {
      id
      title
      price
      description
      address {
        locality
      }
      coverImg {
        url
      }
    }
  }
`;