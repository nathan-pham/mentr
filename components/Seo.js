import Head from "next/head"

const SEO = ({ title="Home | Mentr", description="Mentr is an online learning platform and environment for programmers" }) => (
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{ title }</title>
    </Head>
)

export default SEO