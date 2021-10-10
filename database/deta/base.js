import { Deta } from "deta"

const deta = Deta(`${ process.env.DETA_PROJECT_KEY }`)

export const users = deta.Base("users")
export const users = deta.Base("snippets")
export const users = deta.Base("resources")