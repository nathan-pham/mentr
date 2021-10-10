import Head from "next/head"

export default function Root({
    children,
    title="Home", 
    description="Mentr is an online learning platform and environment. Learn and grow with Mentr."
}) {

    title = "Mentr | " + title

    return (

        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>{ title }</title>
            </Head>

            { children }
        </>

    )

}