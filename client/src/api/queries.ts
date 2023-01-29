import gql from 'graphql-tag';

export const GET_ALL_CATEGORIES = gql`
  query All_Categories {
    getAllCategories {
      id
      name
    }
  }
`;
