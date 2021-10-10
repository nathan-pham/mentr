import { useEffect } from "react"

import Header from "@components/navigation/Header"
import Root from "@components/Root"

import store, { useStore } from "@components/state/store"
import verifyUser from "@database/deta/user/verifyUser"

export async function getServerSideProps({ req }) {
    
    const user = await verifyUser(req)
    if(user) {
        return {
            props: { user }
        }
    } 

    return { redirect: { permanent: false, destination: "/auth/signin" } }

}

export default function Messages({ user }) {
   
    const state = useStore(store)
    useEffect(() => {
        state.user.set(user)
    }, [])

    return (
        <Root title="Messages">
            <div className="max-w-3xl mx-auto">
                <Header />
            </div>
        </Root>
    )

}