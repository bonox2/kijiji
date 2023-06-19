import { gql } from '@apollo/client';

export const CREATE_AD_M = gql`
  mutation CreateAd($title: String!, $categoryId: ID!) {
    createAd(data: {
        title: $title
        category: { connect: { id: $categoryId } }
    }) {
      id
      title
    }
  }
`;