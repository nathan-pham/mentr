export default function Input({ name="Untitled", type="text", label, className="", ...props }) {

    label = label || name

    return (
        <div className={"flex flex-col w-full " + className }>

            <label htmlFor={ name } className="text-gray-500 font-medium">{ label }</label>
            <input name={ name } type={ type } className="border border-gray-400 mt-2 rounded-md px-3 py-2 outline-none text-gray-400 focus:border-blue-500 focus:text-gray-700" required { ...props } />
                    
        </div>
    )

}