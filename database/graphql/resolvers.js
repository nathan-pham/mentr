import createUser from "@database/deta/user/createUser"
import loginUser from "@database/deta/user/loginUser"

export const resolvers = {

    Query: {

        loginUser

    },

    Mutation: {

        createUser

    }

}