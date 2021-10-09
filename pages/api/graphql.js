import { ApolloServer } from "apollo-server-micro"
import * as utils from "@nathan-pham/utils"
import cors from "cors"

import { resolvers } from "@database/graphql/resolvers"
import { typeDefs } from "@/database/graphql/typeDefs"

// initialize middleware
const corsMiddleware = utils.next.middleware(cors({ methods: ["GET", "POST"] }))

// create & start the Apollo server
const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

// API handler
export default async function handler(req, res) {
    await startServer
    await corsMiddleware(req, res)
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res)
}

// Apollo will handle parsing?
export const config = {
    api: { 
        bodyParser: false 
    }
}