import { gql } from '@apollo/client';

export const ADS_BY_CATEGORY_Q = gql`
  query AdsByCategory($categoryName: String!, $orderBy: [AdOrderByInput!]) {
    ads(
      orderBy: $orderBy
      where: {
        OR: [
          { category: { name: { equals: $categoryName } } }
          { subcategory: { name: { equals: $categoryName } } }
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
