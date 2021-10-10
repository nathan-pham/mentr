import { CalendarOutline } from "react-ionicons"
import { useEffect } from "react"

import Header from "@components/navigation/Header"
import Root from "@components/Root"
import Title from "@components/dashboard/Title"

import store, { useStore } from "@components/state/store"
import verifyUser from "@database/deta/user/verifyUser"
import { users } from "@database/deta/base"

export default function Mentor({ user, mentor }) {

    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    const title = mentor.experience.length > 0 ? `${ mentor.experience.title }, ${ mentor.experience.company }` : "No experience"

    return (
        <Root title={ mentor.name }>
            <div className="max-w-3xl mx-auto">
                <Header />

                <div className="flex">
                    <img src={ mentor.image } alt="Mentor Image" className="mt-6 rounded-lg shadow-lg h-24 w-24 border border-gray-400 mr-4 object-cover" />

                    <div>
                        <h1 className="mt-4 text-4xl text-gray-700 font-semibold">{ mentor.name }</h1>
                        <p className="text-gray-400 text-lg mt-2 leading-5">{ title } <br/>{ mentor.karma } Karma</p>    
                    </div>                
                </div>

                <div className="flex mt-6">
                    <button className="rounded-md bg-blue-500 text-white px-3 py-2 w-max cursor-pointer flex gap-2 mr-4">Availability <CalendarOutline color="#fff" /></button>
                    <button className="rounded-md border border-blue-500 text-blue-500 px-3 py-2 w-max cursor-pointer">Upvote</button>
                </div>

                <Title>Experience</Title>
                {
                    mentor.experience.length > 0 
                        ? null
                        : <p>No experience listed</p>
                }

                <Title>Reviews</Title>
                {
                    mentor.reviews.length > 0 
                        ? null
                        : <button className="rounded-md bg-blue-500 text-white px-3 py-2 mt-2 w-max cursor-pointer">Add a Review</button>

                }

            </div>
        </Root>
    )
}

export async function getServerSideProps({ res, req, params }) {
    const user = await verifyUser(req)
    const mentor = await users.get(params.key)
    
    if(user && mentor) {
        return {
            props: { user, mentor }
        }
    } 

    return { redirect: { permanent: false, destination: "/~" } }
}