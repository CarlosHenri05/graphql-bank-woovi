import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Account {
    id: ID!
    username: String!
    balance: Float!
  }

  type Query {
    account(id: ID!): Account
    accounts: [Account!]!
  }

  input CreateAccountInput {
    username: String!
    balance: Float!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account!
    deleteAccount(id: ID!): Boolean!
  }
`
