const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String
    orders: [Order]
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

type Review {
  userId: ID!
  BookId: ID!
  

}

type Category {
  _id: ID
  bookId: ID!
  title: String 
  category: String 
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
    categories: [Category]
    book(category: ID, name: String): [Product]
    book(_id: ID!): Product
    user: User
    cart(_id: ID!): Cart
    checkout(products: [ID]!): Checkout
  }
  


  type Auth {
    token: ID!
    user: User
  }



  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addCart(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Book
    login(email: String!, password: String!): Auth
  }
`






;

module.exports = typeDefs;
