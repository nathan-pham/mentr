import Root from "@components/Root"
import Search from "@components/dashboard/Search"
import Title from "@components/dashboard/Title"
import Mentor from "@components/dashboard/Mentor"
import More from "@components/dashboard/More"

function Topic({ text }) {

    return (

        <div className="border border-gray-400 rounded-md font-lg font-semibold p-4 text-center hover:border-blue-500">{ text }</div>

    )

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

    return (

        <Root title="Dashboard">


            <div className="max-w-3xl mx-auto">

                <header className="flex items-center justify-between mt-12">
                    <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 " />
                </header>

                <main>

                    <h1 className="mt-4 text-2xl text-gray-700">Hi, <b>Nathan</b> ✌<br />Find your new fav Mentr</h1>
                
                    <Search />

                    <Title>Meet Mentors</Title>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Mentor />
                        <Mentor />
                        <Mentor />
                        <Mentor />
                        <Mentor />
                        <Mentor />
                    </div>

                    <More>Mentors</More>

                    <Title>Recommended Topics</Title>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        { topics.map((v, i) => <Topic text={ v } key={ i } />) }
                    </div>

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