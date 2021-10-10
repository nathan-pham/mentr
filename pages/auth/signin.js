import Input from "@components/auth/Input"
import Root from "@components/Root"

import client, { gql } from "@components/client"

export default function Signin() {

    const onSubmit = async (e) => {

        e.preventDefault()

        const inputs = [...e.target.querySelectorAll("input")]
        const variables = inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {})

        client.query({
            query: gql`
                query Query {
                    loginUser(email: "${ variables.email }", password: "${ variables.password }") {
                        name
                    }
                }
            `
        }).then(console.log)
            .catch(e => console.log("wrong password"))

        return false

    }

  
    return (
        <Root title="Sign In">
            <div className="flex items-stretch">

                <div className="px-32 w-1/2 min-h-screen">

                    <div className="flex items-center mt-12">

                        <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 mr-2" />
                        <h1 className="text-gray-700 text-xl">mentr</h1>

                    </div>

                    <h1 className="font-bold text-3xl text-gray-700 mt-16">Sign in</h1>
                    <p className="text-gray-500 mt-2">Log in to start learning from qualified mentors</p>

                    <form className="flex flex-col mt-8" onSubmit={ onSubmit }>

                        <Input name="email" label="Your email" type="email" placeholder="name@domain.com" required />
                        <Input name="password" label="Password" type="password" placeholder="at least 8 characters" required className="mt-4" />
                        
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-md mt-4">Log In</button>

                        <p className="self-end text-gray-500 mt-4">Don't have an account? <a href="/auth/signup" className="text-blue-500 font-medium">Sign up</a></p>

                    </form>

                </div>

                <div className="flex items-center justify-center w-1/2 min-h-screen bg-blue-50">

                    <img src="/undraw/proud.svg" className="w-8/12" />

                </div>
                
            </div>
        </Root>
    )

}