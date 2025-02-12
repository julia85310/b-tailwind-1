
export default function NavbarDB({img, titulo, subtitulo}){
    return <div className="flex fixed top-0 w-full bg-blue-100 h-auto ">
        <img className=" w-32 h-auto m-4" src={img}></img>
        
        <div className="flex justify-center flex-col flex-1 items-start text-gray-700 mx-8">
            <h1 className="text-3xl font-bold text-green-400">{titulo}</h1>
            <p className="italic">{subtitulo}</p>
        </div>
        
    </div>
}