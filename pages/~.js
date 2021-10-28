import { useEffect } from "react"

import ResourceCard from "@components/dashboard/card/ResourceCard"
import MentorCard from "@components/dashboard/card/MentorCard"
import TopicCard from "@components/dashboard/card/TopicCard"
import Search from "@components/dashboard/Search"
import Title from "@components/dashboard/Title"
import More from "@components/dashboard/More"
import Header from "@components/navigation/Header"
import Root from "@components/Root"

import store, { useStore } from "@components/state/store"

import fetchAllUsers from "@database/deta/user/fetchAllUsers"
import verifyUser from "@database/deta/user/verifyUser"

// {"auth":{"email":"nathanpham.me@gmail.com","password":"$2b$10$A2tC23an/4eDMwdQ/up4Cuilxxwrw0oV8Ip4wSrNCtfs1ToKXFNDu"},"dates":[],"experience":[],"image":"/icons/mentr.png","karma":0,"key":"9dimgx0lqd7s","name":"Nathan","tags":[]}

const topics = [ "Awarness", "Brain Exercises", "Mindfulness", "Meditation", "Understanding", "Thoughts", "Compassion", "Learning" ]

export default function Dashboard({ user, mentors }) {

    const state = useStore(store)
    useEffect(() => { state.user.set(user) }, [])

    return (
        <Root title="Dashboard">
            <div className="max-w-3xl mx-auto">
                <Header />

                <main>
                    <h1 className="mt-4 text-2xl text-gray-700">Hi, <b>{ user.name }</b> ✌<br />Find your new fav Mentr</h1>
                
                    <Search />

                    <Title>Meet Mentors</Title>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {
                            mentors.map((mentor, i) => <MentorCard { ...mentor } _key={ mentor.key } key={ i } />)
                        }
                    </div>

                    <More>Mentors</More>

                    <Title>Curated Resources</Title>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <ResourceCard image="https://img-c.udemycdn.com/course/480x270/1746608_d226_4.jpg" title="CBT for Depression, Anxiety, Phobias and Panic Attacks" source="Udemy" />
                        <ResourceCard image="https://mhanational.org/sites/default/files/free-to-use-sounds-1xT5Yz2Am0M-unsplash%20(1)_0.jpg" title="Mental Health America Website" source="Mental Health America" />
                        <ResourceCard image="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" title="Digital Awareness & the Effects of Computers" source="Udemy" />
                    </div>
                    <More>Resources</More>
                    
                    <Title>Recommended Topics</Title>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        { topics.map((v, i) => <TopicCard text={ v } key={ i } />) }
                    </div>

                    <Title>Best Snippets</Title>
                    <div >
                        <div className="rounded-md bg-gray-100 text-gray-700 p-4 mt-4">
                        Our greatest glory is not in never falling, but in rising every time we fall.
                        </div>
                        <div className="rounded-md bg-gray-100 text-gray-700 p-4 mt-4">
                        Magic is believing in yourself, if you can do that, you can make anything happen.
                        </div>
                        <div className="rounded-md bg-gray-100 text-gray-700 p-4 mt-4">
                        All our dreams can come true, if we have the courage to pursue them.
                        </div>
                    </div>
                    <More>Snippets</More>
                </main>

                <footer className="h-12"></footer>
            </div>
        </Root>
    )

}

export async function getServerSideProps({ req  }) {
    
    const user = await verifyUser(req)
    const mentors = await fetchAllUsers()

    if(user) {
        return {
            props: { user, mentors }
        }
    } 

    return { redirect: { permanent: false, destination: "/auth/signin" } }

}