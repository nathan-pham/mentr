import createUser from "@database/deta/user/createUser"

export const resolvers = {

    Query: {

        // (_, args)
        Hello: () => "Hello World",
        
    },

    Mutation: {

        createUser: (_, args) => createUser(args)

    }

}