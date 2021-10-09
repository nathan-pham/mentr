export default function More({ children, ...props }) {

    return (

        <div className="flex justify-end mt-4">
            <button className="px-3 py-2 rounded-md bg-blue-500 text-white" { ...props }>More { children }</button>
        </div>

    )    

}