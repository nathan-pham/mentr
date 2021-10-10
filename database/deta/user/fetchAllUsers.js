import { users } from "@database/deta/base"

export default async function fetchAllUsers() {
    return (await users.fetch()).items || []
}