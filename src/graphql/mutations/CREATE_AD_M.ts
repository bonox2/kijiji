import { gql } from '@apollo/client';

export const CREATE_AD_M = gql`
  mutation CreateAd(
    $title: String!
    $categoryId: ID!
    $subcategoryId: ID!
    $price: String!
    $address: String!
    $description: String
    $coverImg: Upload!
  ) {
    createAd(
      data: {
        title: $title
        category: { connect: { id: $categoryId } }
        subcategory: { connect: { id: $subcategoryId } }
        price: $price
        address: $address
        description: $description
        coverImg: { upload: $coverImg }
      }
    ) {
      id
      title
      price
      description
      address
    }
  }
`;
