import Root from "@components/Root"

export default function Login() {

    return (

        <Root title="Sign Up">
            
            <div className="flex items-stretch">

                <div className="flex flex-col justify-center px-32 w-1/2 h-screen">

                    <div className="flex items-center">

                        <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 mr-2" />
                        <h1 className="text-gray-700 text-xl">mentr</h1>

                    </div>

                    <h1 className="font-bold text-3xl text-gray-700 mt-10">Sign in</h1>
                    <p className="text-gray-500 mt-2">Sign in to start learning from qualified mentors</p>

                    <form className="flex flex-col mt-8">

                        <label for="email" className="text-gray-500 font-medium">Your email</label>
                        <input placeholder="name@domain.com" name="email" type="email" className="border border-gray-400 mt-2 rounded-lg px-3 py-2 outline-none focus:border-blue-500" required />

                        <label for="password" className="text-gray-500 font-medium mt-6">Password</label>
                        <input placeholder="at least 8 characters" name="password" type="password" className="border border-gray-400 mt-2 rounded-lg px-3 py-2 outline-none focus:border-blue-500" required />
                        
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg mt-6">Log In</button>

                        <p className="mt-8 self-end text-gray-500">Don't have an account? <a href="/auth/signup" className="text-blue-500 font-medium">Sign up</a></p>

                    </form>

                </div>

                <div className="flex items-center justify-center w-1/2 h-screen bg-gray-100">

                    <img src="/undraw_coder.svg" className="w-8/12" />

                </div>
                
            
            </div>
            

        </Root>

    )

}