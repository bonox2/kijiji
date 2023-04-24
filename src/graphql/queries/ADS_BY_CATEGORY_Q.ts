import { gql } from '@apollo/client';

export const ADS_BY_CATEGORY_Q = gql`
  query AdsByCategory($categoryName: String!) {
    ads(
      where: {
        OR: [
          { category: { name: { equals: $categoryName } } }
          { subcategory: { name: { equals: $categoryName } } }
        ]
      }
    ) {
      id
      title
    }
  }
`;
