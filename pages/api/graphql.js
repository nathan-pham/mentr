import { ApolloServer } from "apollo-server-micro"
import * as utils from "@nathan-pham/utils"
import cookieParser from "cookie-parser"
import cors from "cors"

import { resolvers } from "@database/graphql/resolvers"
import { typeDefs } from "@database/graphql/typeDefs"

// initialize middleware
const corsMiddleware = utils.next.middleware(cors({ methods: ["GET", "POST"] }))
const cookieMiddleware = utils.next.middleware(cookieParser())

// create & start the Apollo server
const apolloServer = new ApolloServer({ typeDefs, resolvers, context: (full) => full })
const startServer = apolloServer.start()

// API handler
export default async function handler(req, res) {
    await startServer
    await corsMiddleware(req, res)
    await cookieMiddleware(req, res)
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res)
}

// Apollo will handle parsing?
export const config = {
    api: { 
        bodyParser: false 
    }
}