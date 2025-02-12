
export default function BlogCard({titulo, descripcion, img}){
    return <div className="m-4 bg-teal-500 p-8 text-white rounded-xl w-2/3 h-fit">
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