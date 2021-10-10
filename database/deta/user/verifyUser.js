import { parse } from "cookie"
import jwt from "jsonwebtoken"

import { users } from "@database/deta/base"

export default async function verifyUser(req) {
    const { JWT_TOKEN: token } = parse(req.headers.cookie)

    if(token) {
        const { email } = jwt.verify(token, `${process.env.JWT_SECRET}`) || {}
        return email ? (await users.fetch({ "auth.email": email })).items[0] : false
    }

    return false

}