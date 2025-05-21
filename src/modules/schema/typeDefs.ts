import { gql } from 'apollo-server'


export const typeDefs = gql`
  type Account {
  id: ID!
  username: String!
  amount: Float!
  }
  
  type Query {
  
  }
  `