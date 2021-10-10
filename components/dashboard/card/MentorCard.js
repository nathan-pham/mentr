// {"auth":{"email":"nathanpham.me@gmail.com","password":"$2b$10$A2tC23an/4eDMwdQ/up4Cuilxxwrw0oV8Ip4wSrNCtfs1ToKXFNDu"},"dates":[],"experience":[],"image":"/icons/mentr.png","karma":0,"key":"9dimgx0lqd7s","name":"Nathan","tags":[]}
import Link from "next/link"

export default function Mentor({ _key, name, karma, image, experience }) {

    const title = experience.length > 0 ? `${ experience.title }, ${ experience.company }` : "No experience"

    return (

        <Link href={ `/mentor/${_key}` }>
            <a>
                <div className="rounded-lg border border-gray-400 p-4 hover:border-blue-500">
                    <div className="flex items-center">
                        <img src={ image } className="w-14 h-14 rounded-md mr-4 object-cover" />

                        <div>
                            <h1 className="text-lg font-semibold">{ `${ name } (${ karma })` }</h1>
                            <p className="text-gray-400">{ title }</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>

    )

}