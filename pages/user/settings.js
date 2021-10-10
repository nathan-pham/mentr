import { useEffect } from "react"

import Header from "@components/navigation/Header"
import Title from "@components/dashboard/Title"
import Root from "@components/Root"

import store, { useStore } from "@components/state/store"
import verifyUser from "@database/deta/user/verifyUser"

export default function Settings({ user }) {
   
    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    return (
        <Root title="Settings">
            <div className="max-w-3xl mx-auto">
                <Header />
                
                <h1 className="mt-4 text-2xl text-gray-700">Manage your <b>Settings</b></h1>
                <p className="text-gray-400">Update your profile picture, experiences, and other preferences</p>

                <Title>Profile Picture</Title>
                <div className="flex mt-4">
                    <img src={ user.image } alt="Profile Image" className="rounded-lg shadow-lg h-24 w-24 border border-gray-400 mr-4" />
                    <div>
                        <p className="text-gray-400">Upload a new profile picture. Your account will be terminated if it is not safe for work or includes inappropriate content.</p>

                        <label className="rounded-md bg-blue-500 text-white px-3 py-2 block mt-2 w-max cursor-pointer">
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="hidden" />
                            Upload Image
                        </label>
                    </div>
                </div>

                <Title>Experience</Title>
                <p className="text-gray-400">Add the universities, institutions, or companies you've worked or studied at</p>
                <button className="rounded-md bg-blue-500 text-white px-3 py-2 block mt-2">Add Experience
                </button>

                <Title>Locked Settings</Title>
                <p className="text-gray-400">These are your account settings that cannont be changed.</p>
                <input value={ user.name } disabled className="rounded-md mt-4 px-3 py-2 border border-gray-400 cursor-not-allowed block w-60 text-gray-700" />
                <input value={ user.auth.email } disabled className="rounded-md mt-2 px-3 py-2 border border-gray-400 cursor-not-allowed block w-60 text-gray-700" />

                <footer className="h-12"></footer>
            </div>
        </Root>
    )

}

export async function getServerSideProps({ req }) {
    
    const user = await verifyUser(req)
    if(user) {
        return {
            props: { user }
        }
    } 

    return { redirect: { permanent: false, destination: "/auth/signin" } }

}