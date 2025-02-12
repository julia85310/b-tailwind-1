
export default function BDCard({titulo, descripcion, img}){
    return <div className="m-4 bg-green-400 p-8 text-white rounded w-auto h-fit">
        <img className="rounded-xl" src={img}></img>
        <h1 className="m-2 text-2xl font-bold">{titulo}</h1>
        <p className="break-words m-2">{descripcion}</p>
        <div className="flex justify-end">
                <button className="m-2 px-4 py-2 bg-white hover:bg-teal-100 text-teal-500 rounded-xl">
                    Ver más
                </button>
            </div>
    </div>
}