import { gql } from '@apollo/client';

export const CREATE_IMAGES_M = gql`
  mutation CreateImages(
    $data: [ImageCreateInput!]!
  ) {
    createImages(
      data: $data
    ) {
      id
    }
  }
`;
