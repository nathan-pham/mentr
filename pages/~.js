import ResourceCard from "@components/dashboard/card/ResourceCard"
import MentorCard from "@components/dashboard/card/MentorCard"
import TopicCard from "@components/dashboard/card/TopicCard"
import Search from "@components/dashboard/Search"
import Title from "@components/dashboard/Title"
import More from "@components/dashboard/More"
import Header from "@components/Header"
import Root from "@components/Root"

import fetchAllUsers from "@database/deta/user/fetchAllUsers"
import verifyUser from "@database/deta/user/verifyUser"

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

// {"auth":{"email":"nathanpham.me@gmail.com","password":"$2b$10$A2tC23an/4eDMwdQ/up4Cuilxxwrw0oV8Ip4wSrNCtfs1ToKXFNDu"},"dates":[],"experience":[],"image":"/icons/mentr.png","karma":0,"key":"9dimgx0lqd7s","name":"Nathan","tags":[]}

export default function Dashboard({ user, mentors }) {

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
                            mentors.map((mentor, i) => <MentorCard key={ i } { ...mentor } />)
                        }
                    </div>

                    <More>Mentors</More>

                    <Title>Curated Resources</Title>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <ResourceCard image="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" title="2021 Python for Machine Learning & Data Science" source="text-gray-400 mt-1" />
                        <ResourceCard image="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" title="2021 Python for Machine Learning & Data Science" source="text-gray-400 mt-1" />
                        <ResourceCard image="https://img-c.udemycdn.com/course/480x270/2769460_e60c.jpg" title="2021 Python for Machine Learning & Data Science" source="text-gray-400 mt-1" />
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