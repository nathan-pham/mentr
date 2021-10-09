import { SearchOutline } from "react-ionicons"

export default function Search() {

    return (
       
       <article className="bg-blue-500 rounded-lg text-white p-4 mt-6">

            <div className="px-3 py-2 rounded-md bg-white flex items-center text-gray-400 focus-within:text-gray-700">
                <SearchOutline className="w-6 h-6 mr-2" style={{ color: "inherit" }} />
                <input className="outline-none w-full" placeholder="Search for a mentor or topic..." />
            </div>

            <div className="flex mt-6">
                <div className="w-3/5">
                    <p>Get connected with hundreds of the <b>best</b> mentors, resources, and solutions. Learn and grow with Mentr, a platform <b>created by students</b> and <b>run by students</b>.</p>
                    <button className="mt-4 px-3 py-2 rounded-md bg-white text-blue-500">Learn More</button>
                </div>

                <div className="w-2/5 flex justify-end">
                    <img src="/undraw/learn.svg" alt="Undraw: Mentor Image" className="w-9/12"/>
                </div>
            </div>

        </article>

    )

}