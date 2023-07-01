import { gql } from '@apollo/client';

export const FULL_CATEGORIES_Q = gql`
  query FullCategories {
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
