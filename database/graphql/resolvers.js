import createUser from "@database/deta/user/createUser"
import loginUser from "@database/deta/user/loginUser"
import { users } from "@database/deta/base"

export const resolvers = {

    Query: {

        loginUser

    },

    Mutation: {

        createUser,
        updateUserImage: async (_, { key, image }) => {
            await users.update({ image }, key)
            return image
        }

    }

}