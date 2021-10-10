import { useEffect, useRef } from "react"

import Header from "@components/navigation/Header"
import Title from "@components/dashboard/Title"
import Root from "@components/Root"

import client, { gql } from "@components/state/client"
import store, { useStore } from "@components/state/store"

import verifyUser from "@database/deta/user/verifyUser"

// const encodeBase64 = (file) => (
//     new Promise((resolve, reject) => {
//         const reader = new FileReader()
//         reader.onload = () => resolve(reader.result)
//         reader.onerror = (error) => reject(error)
//         reader.readAsDataURL(file)
//     })
// )

const resize = (image) => {
    const canvas = document.createElement("canvas")
    const max = 100
    let { width, height } = image
    
    if(width > height && width > max) {
        height *= max / width
        width = max
    } else if(height > max) {
        width *= max / height
        height = max
    }

    canvas.width = width
    canvas.height = height
    canvas.getContext("2d").drawImage(image, 0, 0, width, height)
    console.log(canvas.toDataURL("image/jpeg"))
    return canvas.toDataURL("image/jpeg")
}


export default function Settings({ user }) {
   
    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    const previewRef = useRef(null)

    const onChange = async (e) => {
        const [ file ] = e.target.files

        if(file) {
            previewRef.current.src = URL.createObjectURL(file)
            previewRef.current.onload = () => {
                URL.revokeObjectURL(previewRef.current.src)
                
                client.mutate({
                    mutation: gql`
                        mutation Mutation {
                            updateUserImage(key: "${ user.key }", image: "${ resize(previewRef.current) }")
                        }
                    `
                }).then(console.log)
            }
        }

    }

    return (
        <Root title="Settings">
            <div className="max-w-3xl mx-auto">
                <Header />
                
                <h1 className="mt-4 text-2xl text-gray-700">Manage your <b>Settings</b></h1>
                <p className="text-gray-400">Update your profile picture, experiences, and other preferences</p>

                <Title>Profile Picture</Title>
                <div className="flex mt-4">
                    <img src={ user.image } alt="Profile Image" ref={ previewRef } className="rounded-lg shadow-lg h-24 w-24 border border-gray-400 mr-4 object-cover" />
                    <div>
                        <p className="text-gray-400">Upload a new profile picture. Your account will be terminated if it is not safe for work or includes inappropriate content.</p>

                        <label className="rounded-md bg-blue-500 text-white px-3 py-2 block mt-2 w-max cursor-pointer">
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="hidden" onChange={ onChange } />
                            Upload Image
                        </label>
                    </div>
                </div>

                <Title>Experience</Title>
                <p className="text-gray-400">Add the universities, institutions, or companies you've worked or studied at</p>
                <button className="rounded-md bg-blue-500 text-white px-3 py-2 block mt-2">Add Experience
                </button>

                <Title>Locked Settings</Title>
                <p className="text-gray-400">These are your account settings that cannot be changed.</p>
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