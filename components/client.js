import { ApolloClient, createHttpLink, InMemoryCache, useQuery, gql } from "@apollo/client"

const link = createHttpLink({
    uri: typeof window == "undefined" ? "http://localhost:3000" : window.location.origin + "/api/graphql"
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),

    request: (operation) => {
        operation.setContext({
            fetchOptions: {
                credentials: "include" 
            }
        })
    }
})

export default client
export { useQuery, gql }