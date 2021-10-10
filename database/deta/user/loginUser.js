import { users } from "@database/deta/base"

import { serialize } from "cookie"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

// export loginUser method
export default async function loginUser(_, { email, password }, { res }) {

    // retrieve user & compare password to database
    const user = (await users.fetch({ "auth.email": email })).items[0]
    const success = (user && await bcrypt.compare(password, user.auth.password))

    if(success) {

        // create a JWT token & save it to the cookies
        const expiresIn = new Date().getTime() * 60 * 60 * 1000
        const token = jwt.sign({ email }, `${process.env.JWT_SECRET}`, { algorithm: "HS512", expiresIn })
    
        res.setHeader("Set-Cookie", serialize("JWT_TOKEN", token, { path: '/', httpOnly: true }))

        // return the user with the JWT token
        return {
            ...user,
            auth: {
                ...user.auth,
                token
            }
        }

    } 

    // return an error if login failed
    return new Error("That email or password does not match our records.")

}