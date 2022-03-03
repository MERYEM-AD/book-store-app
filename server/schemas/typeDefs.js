const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String
    orders: [Order]
  }

  type Review {
    title: String!
    author: String!
    star: Int
    comment: String
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    price: Float
    quantity: Int
    image: String
    title: String!
  }


type Cart {
  userId: ID!
  BookId: ID!
  session: ID
  products: [Product]
}


  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }


  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
    addReview(title: String, author:String, star: Int, comment: String): User

  }
`;

module.exports = typeDefs;
