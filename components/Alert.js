import { InformationCircleOutline, BugOutline } from "react-ionicons"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const style = {
    color: "inherit",
    height: "2.25rem",
    width: "2.25rem",
}

export default function Alert({ icon="error", title="Untitled Alert", description="Untitled Alert Description" }) {

    let timer = null
    const [ visible, setVisible ] = useState(true)

    useEffect(() => {

        if(visible) {
            timer = setTimeout(() => {
                setVisible(!visible)
                timer = null
            }, 5000)
        }

        return () => clearTimeout(timer)

    }, [])

    return (typeof document == "undefined" || !visible)
        ? null
        : createPortal(
            <div className="fixed bottom-6 right-6 p-6 shadow-xl border border-gray-400 bg-white rounded-md max-w-xs">
                
                <div className="text-blue-500">
                    { 
                        icon == "error" 
                            ? <BugOutline style={ style } /> 
                            : <InformationCircleOutline style={ style } /> 
                    }
                </div>

                <h1 className="mt-4 text-2xl font-semibold">{ title }</h1>
                <p className=" text-gray-400">{ description }</p>
            </div>,
            document.body
        )

}

// const notification = ({ icon="default", text, title }={}) => (
//     div({ class: "notification" },
//         ion_icon({ name: `${ aliases[icon] }-outline` }),
//         h1({}, title),
//         p({}, text)
//     )
// )
