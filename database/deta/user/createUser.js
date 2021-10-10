import { users } from "@database/deta/base"
import bycrypt from "bcrypt"

export default async function createUser(_, { name, email, password }) {
    const exists = (await users.fetch({ "auth.email": email }))?.items.length > 0

    if(exists) {
        return new Error("A user with a similar email already exists.")
    }

    return (name && email && password)
        ? users.put({
            tags: [], dates: [], experience: [], reviews: [],
            image: "/icons/mentr.png", name, karma: 0,
            auth: { email, password: await bycrypt.hash(password, 10) }
        })
        : new Error("Missing a required field")

}