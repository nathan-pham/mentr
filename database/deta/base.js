import { Deta } from "deta"

const deta = Deta(`${process.env.DETA_PROJECT_KEY}`)

export const users = deta.Base("users")
export const snippets = deta.Base("snippets")
export const resources = deta.Base("resources")