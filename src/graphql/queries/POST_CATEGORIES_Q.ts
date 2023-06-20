import { gql } from '@apollo/client';

export const POST_CATEGORIES_Q = gql`
  query PostCategories {
    categories {
      id
      name
    }
    subcategories {
        id
        name
      }
  }
`;