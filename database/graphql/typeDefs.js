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

        image: String!
        name: String!
        job: String!
        university: String!
        karma: Int!
        tags: [String]!
        dates: [String]!
        experience: [Experience]!

        # TODO: add reviews

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