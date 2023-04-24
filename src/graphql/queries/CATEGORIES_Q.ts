import { gql } from '@apollo/client';

export const CATEGORIES_Q = gql`
  query Categories {
    categories {
      id
      name
      subcategories {
        id
        name
      }
    }
  }
`;
