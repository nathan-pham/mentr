import { useEffect } from "react"

import store, { useStore } from "@components/state/store"
import verifyUser from "@database/deta/user/verifyUser"

export default function Mentor({ user }) {

    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    return <p>bruh</p>
}

export async function getServerSideProps({ req, params }) {
    const user = await verifyUser(req)

    if(user) {
        return {
            // TODO: fetch [id] to render mentor details
            props: { user }
        }
    } 

    return { redirect: { permanent: false, destination: "/auth/signin" } }
}