import { gql } from '@apollo/client';

export const SEARCH_ADS_Q = gql`
  query SearchAds($categoryName: String, $query: String) {
    ads(
      where: {
        category: { name: { equals: $categoryName } }
        OR: [
          { title: { contains: $query } }
          { description: { contains: $query } }
        ]
      }
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
