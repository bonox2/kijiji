import { gql } from '@apollo/client';

export const SEARCH_ADS_Q = gql`
  query SearchAds($categoryName: String, $query: String, $orderBy: [AdOrderByInput!]) {
    ads(
      orderBy: $orderBy
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
      address 
      coverImg {
        id
        url
      }
      createdAt
    }
  }
`;
