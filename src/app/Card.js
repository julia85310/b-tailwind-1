
export default function Card(){
    return <div className="m-4 bg-gray-500 p-8 text-white rounded w-64 h-fit">
        <h1 className="m-2 text-2xl font-bold">Título</h1>
        <p className="break-words m-2 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-end">
                <button className="m-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl">
                    Botón
                </button>
            </div>
    </div>
}