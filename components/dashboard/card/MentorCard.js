// {"auth":{"email":"nathanpham.me@gmail.com","password":"$2b$10$A2tC23an/4eDMwdQ/up4Cuilxxwrw0oV8Ip4wSrNCtfs1ToKXFNDu"},"dates":[],"experience":[],"image":"/icons/mentr.png","karma":0,"key":"9dimgx0lqd7s","name":"Nathan","tags":[]}


export default function Mentor({ name, image, experience }) {

    const title = experience.length > 0 ? `${ experience.title }, ${ experience.company }` : "No experience"

    return (

        <div className="rounded-lg border border-gray-400 p-4 hover:border-blue-500">
                            
            <div className="flex items-center">

                <img src={ image } className="object-cover w-14 h-14 rounded-md mr-4" />

                <div>
                    <h1 className="text-lg font-semibold">{ name }</h1>
                    <p className="text-gray-400">{ title }</p>
                </div>

            </div>

        </div>

    )

}