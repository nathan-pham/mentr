import Root from "@components/Root"
import Input from "@components/auth/Input"

export default function signUp() {

    return (

        <Root title="Sign Up">
            
            <div className="flex items-stretch">

                <div className="px-32 w-1/2 min-h-screen">

                    <div className="flex items-center mt-12">

                        <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 mr-2" />
                        <h1 className="text-gray-700 text-xl">mentr</h1>

                    </div>

                    <h1 className="font-bold text-3xl text-gray-700 mt-16">Sign up</h1>
                    <p className="text-gray-500 mt-2">Create a free account to get full access to Mentr</p>

                    <form className="flex flex-col mt-6">

                        <Input name="email" label="Your name" placeholder="full name" required />
                        <Input name="email" label="Your email" type="email" placeholder="name@domain.com" required className="mt-4" />
                        <Input name="password" label="Password" type="password" placeholder="at least 8 characters" required className="mt-4" />
                        
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-md mt-4">Register</button>

                        <p className="self-end text-gray-500 mt-4">Have an account? <a href="/auth/signin" className="text-blue-500 font-medium">Sign in</a></p>

                    </form>

                    <footer className="h-12"></footer>

                </div>

                <div className="flex items-center justify-center w-1/2 min-h-screen bg-blue-50">

                    <img src="/undraw/pair.svg" className="w-8/12" />

                </div>
                
            
            </div>
            

        </Root>

    )

}