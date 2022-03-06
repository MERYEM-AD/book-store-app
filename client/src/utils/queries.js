import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      cart {
        bookId
        authors
        image
        description
        title
        link
        price
        review
        rating
      }
    }
  }
`;
