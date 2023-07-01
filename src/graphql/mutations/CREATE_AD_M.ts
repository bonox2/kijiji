import { gql } from '@apollo/client';

export const CREATE_AD_M = gql`
  mutation CreateAd(
    $title: String!
    $categoryId: ID!
    $subcategoryId: ID!
    $price: String!
    $description: String
  ) {
    createAd(
      data: {
        title: $title
        category: { connect: { id: $categoryId } }
        subcategory: { connect: { id: $subcategoryId } }
        price: $price
        description: $description
      }
    ) {
      id
      title
      price
      description
    }
  }
`;
