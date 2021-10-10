import { gql } from "apollo-server-micro"

export const typeDefs = gql`

    type Snippet {

        language: String!
        code: String!

    }

    type Course {

        image: String!
        title: String!
        from: String!

    }

    type Authentication {
        
        email: String!
        password: String!
        token: String

    }

    type User {

        key: ID!

        tags: [String]
        dates: [String]
        experience: [Experience]
        reviews: [Review]

        image: String!
        name: String!
        karma: Int!

        auth: Authentication!

    }
    
    type Review {

        image: String!
        name: String!
        text: String!

    }

    type Experience {

        image: String!
        title: String!
        company: String!

    }

    type Query {

        loginUser(email: String!, password: String!): User!

    }

    type Mutation {

        createUser(name: String!, email: String!, password: String!): User!
        updateUserImage(key: String!, image: String!): String!

    }

`