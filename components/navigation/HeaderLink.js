import Link from "next/link"

export default function HeaderLink({ href, children }) {

    return (
        <Link href={ href }>
            <a className="text-gray-400 hover:text-blue-500" href="/">
                { children }
            </a>
        </Link>
    )

}