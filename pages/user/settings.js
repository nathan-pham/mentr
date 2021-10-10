import { useEffect, useState, useRef } from "react"

import Header from "@components/navigation/Header"
import Title from "@components/dashboard/Title"
import Input from "@components/auth/Input"
import Root from "@components/Root"

import client, { gql } from "@components/state/client"
import store, { useStore } from "@components/state/store"

import verifyUser from "@database/deta/user/verifyUser"

const resize = (image) => {
    const canvas = document.createElement("canvas")
    const max = 192
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

function Experience({ image, title, company }) {
    return (
        <div className="flex p-4 border border-gray-400 rounded-lg items-center mt-2">
            <img src={ image } alt="Company Logo" className="h-10 w-10 object-cover mr-4" />
            <div>
                <h1 className="font-semibold text-lg">{ company }</h1>
                <p className="text-gray-400">{ title }</p>
            </div>
        </div>
    )
}

function ExperienceModal({ setVisible, onSubmit }) {
    
    const onClick = (e) => {
        e.preventDefault()
        setVisible(false)
        return false
    }

    const keepModal = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="fixed bg-opacity-30 bg-black top-0 left-0 w-screen h-screen flex items-center justify-center" onClick={ onClick }>
            <div className="flex flex-col bg-white p-4 border border-gray-400 shadow-lg rounded-lg w-96" onClick={ keepModal }>
                <h1 className="text-2xl font-semibold">Add Experience</h1>
                
                <form onSubmit={ onSubmit }>
                    <Input name="company" label="Company name" placeholder="Google" required className="mt-6" />
                    <Input name="image" label="Company logo" placeholder="/google.png" required className="mt-4" />
                    <Input name="title" label="Job title" placeholder="UI/UX Designer" required className="mt-4" />

                    <div className="flex gap-4 mt-4">
                        <a className="border border-blue-500 text-blue-500 px-3 py-2 rounded-md cursor-pointer" onClick={ onClick }>Cancel</a> 
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Create</button>            
                    </div>
                </form>
            </div>
        </div>
    )

}

export default function Settings({ user }) {
   
    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    const previewRef = useRef(null)
    const [ experiences, setExperiences ] = useState(user.experiences || [])
    const [ visible, setVisible ] = useState(false)

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

    const onSubmit = async (e) => {
        e.preventDefault()

        const inputs = [...e.target.querySelectorAll("input")]
        const variables = inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {})

        setExperiences([ ...experiences, variables ])
        setVisible(false)
    }

    const onClick = () => {
        setVisible(true)
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
                {
                    experiences.length > 0
                        ? experiences.map((experience, i) => <Experience {...experience} key={i} />)
                        : <button className="rounded-md bg-blue-500 text-white px-3 py-2 block mt-2" onClick={ onClick }>Add Experience
                        </button>
                }
                {
                    visible && <ExperienceModal setVisible={ setVisible } onSubmit={ onSubmit } />
                }

                <Title>Locked Settings</Title>
                <p className="text-gray-400">These are your account settings that cannot be changed. If you need to edit a locked setting, contact <a href="mailto:nathanpham.me@gmail.com">nathanpham.me@gmail.com</a></p>
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