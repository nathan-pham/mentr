import { useState } from "react"

import client, { gql } from "@components/client"

import Input from "@components/auth/Input"
import Alert from "@components/Alert"
import Root from "@components/Root"

export default function signUp() {

    const [ alerts, setAlerts ] = useState([])

    const onSubmit = async (e) => {

        e.preventDefault()

        const inputs = [...e.target.querySelectorAll("input")]
        const variables = inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {})

        try {
            await client.query({
                query: gql`
                    mutation Mutation {
                        createUser(name: "${ variables.name }", email: "${ variables.email }", password: "${ variables.password }") {
                            name
                        }                        
                    }
                `
            })

            setAlerts([ ...alerts, { 
                icon: "information", 
                title: "Success!", 
                description: "You can now sign in with your acccount" 
            }])

        } catch(e) {
            console.log("[signup.js] email already exists")

            setAlerts([ ...alerts, { 
                title: "Retry that...", 
                description: "An account with a similar email already exists" 
            }])
        }

        return false

    }


    return (

        <Root title="Sign Up">

            {  alerts.map((alert, i) => <Alert key={ i } { ...alert } />) }
            
            <div className="flex items-stretch">

                <div className="px-32 w-1/2 min-h-screen">

                    <div className="flex items-center mt-12">

                        <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 mr-2" />
                        <h1 className="text-gray-700 text-xl">mentr</h1>

                    </div>

                    <h1 className="font-bold text-3xl text-gray-700 mt-16">Sign up</h1>
                    <p className="text-gray-500 mt-2">Create a free account to get full access to Mentr</p>

                    <form className="flex flex-col mt-6" onSubmit={ onSubmit }>

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