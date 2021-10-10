import { useState, useEffect } from "react"

import MentorCard from "@components/dashboard/card/MentorCard"
import TopicCard from "@components/dashboard/card/TopicCard"
import Search from "@components/dashboard/Search"
import Title from "@components/dashboard/Title"
import More from "@components/dashboard/More"
import Alert from "@components/Alert"
import Root from "@components/Root"

import verifyUser from "@database/deta/user/verifyUser"

export async function getServerSideProps({ req  }) {
    
    const user = await verifyUser(req)

    return user
        ? { props: { user } }
        : { redirect: { permanent: false, destination: "/auth/signin" } }

}

export default function Dashboard() {

    const topics = [
        "Python",
        "Math",
        "Data Science",
        "Algebra",
        "Machine Learning",
        "Calculus",
        "Django",
        "Statistics"
    ]

    const [alert, setAlert] = useState(false)

    useEffect(() => {
        setAlert(true)
    }, [])

    return (

        <Root title="Dashboard">
            
            { alert && <Alert /> }

            <div className="max-w-3xl mx-auto">

                <header className="flex items-center justify-between mt-12">
                    <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 " />
                </header>

                <main>

                    <h1 className="mt-4 text-2xl text-gray-700">Hi, <b>Nathan</b> ✌<br />Find your new fav Mentr</h1>
                
                    <Search />

                    <Title>Meet Mentors</Title>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                    </div>

                    <More>Mentors</More>

                    <Title>Curated Resources</Title>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                            <img src="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" className="rounded-md" />

                            <h1 className="text-lg font-semibold mt-3 leading-6">2021 Python for Machine Learning & Data Science</h1>
                            <p className="text-gray-400 mt-1">Udemy</p>
                        </div>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" className="rounded-md" />

                            <h1 className="text-lg font-semibold mt-3 leading-6">2021 Python for Machine Learning & Data Science</h1>
                            <p className="text-gray-400 mt-1">FreeCodeCamp</p>
                        </div>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" className="rounded-md" />

                            <h1 className="text-lg font-semibold mt-3 leading-6">2021 Python for Machine Learning & Data Science</h1>
                            <p className="text-gray-400 mt-1">Youtube</p>
                        </div>
                    </div>
                    <More>Resources</More>
                    
                    <Title>Recommended Topics</Title>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        { topics.map((v, i) => <TopicCard text={ v } key={ i } />) }
                    </div>

                    <Title>Best Snippets</Title>
                    <div className="mt-4">
                        <div className="rounded-md bg-black text-white p-4">
                            <pre><code>print("Hello World")</code></pre>
                        </div>
                    </div>
                    <More>Snippets</More>
                </main>

                <footer className="py-6"></footer>

            </div>


        </Root>

    )

}