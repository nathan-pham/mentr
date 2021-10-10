import verifyUser from "@database/deta/user/verifyUser"

export async function getServerSideProps({ req }) {
    const user = await verifyUser(req)

    if(user) {
        return {
            // TODO: fetch [id] to render mentor details
            props: { user }
        }
    } 

    return { redirect: { permanent: false, destination: "/auth/signin" } }
}