import { gql } from "apollo-server-micro"

export const typeDefs = gql`

    type User {
        key: ID!
        name: String!
        email: String!
        password: String!
        token: String
    }

    type Query {
        Hello: String!
    }

`