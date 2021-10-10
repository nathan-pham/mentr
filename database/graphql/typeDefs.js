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

    type User {

        key: ID!

        tags: [String]!
        dates: [String]!
        experience: [Experience]!

        image: String!
        name: String!
        karma: Int!

        auth: {

            email: String!
            password: String!
            token: String

        }

    }

    type Experience {

        image: String!
        title: String!
        company: String!
        dates: String!

    }

    type Query {

        Hello: String!
        # createUser(name: String!, email: String!, password: String!): User!

    }

`