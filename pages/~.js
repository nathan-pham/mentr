import Root from "@components/Root"
import { SearchOutline } from "react-ionicons"

export default function Dashboard() {

    return (

        <Root title="Dashboard">


            <div className="max-w-3xl mx-auto">

                <header className="flex items-center justify-between mt-10">
                    <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 " />
                </header>

                <main>

                    <h1 className="mt-4 text-2xl text-gray-700">Hi, <span className="font-bold">Nathan</span> ✌<br />Find your new fav Mentr</h1>
                
                    <article className="bg-blue-500 rounded-lg text-white p-4 mt-4">
                        <div className="px-3 py-2 rounded-md bg-white flex items-center text-gray-400 focus-within:text-gray-700">
                            <SearchOutline className="w-6 h-6 mr-2" style={{ color: "inherit" }} />
                            <input className="outline-none w-full" placeholder="Search for a mentor or topic..." />
                        </div>

                        <div className="flex mt-6">
                            <div className="w-3/5">
                                <p>Get connected with hundreds of the best mentors, resources, and solutions. Learn and grow with Mentr, a platform created by students and run by students.</p>
                                <button className="mt-4 px-3 py-2 rounded-md bg-white text-blue-500">Learn More</button>
                            </div>

                            <div className="w-2/5 flex justify-end">
                                <img src="/undraw/learn.svg" alt="Undraw: Mentor Image" className="w-9/12"/>
                            </div>
                        </div>
                    </article>

                </main>

                <footer></footer>

            </div>


        </Root>

    )

}