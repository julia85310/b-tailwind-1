'use client'
import BlogCard from './BlogCard';

const listaEnlaces = {
    "Recetas Populares": "https://www.ejemplo.com/recetas-populares",
    "Postres Deliciosos": "https://www.ejemplo.com/postres-deliciosos",
    "Cocina Saludable": "https://www.ejemplo.com/cocina-saludable",
    "Recetas Rápidas": "https://www.ejemplo.com/recetas-rapidas",
    "Comida Internacional": "https://www.ejemplo.com/comida-internacional",
    "Técnicas de Cocina": "https://www.ejemplo.com/tecnicas-de-cocina",
    "Recomendaciones de Utensilios": "https://www.ejemplo.com/utensilios-de-cocina",
    "Tips y Trucos": "https://www.ejemplo.com/tips-trucos",
}

const recetas = {
    "Arroz con Leche": {
        descripcion: "Un postre tradicional cremoso y dulce, preparado con arroz, leche y canela.",
        imagen: "../arroz.jpg"
    },
    "Pastel de Chocolate": {
        descripcion: "Un delicioso pastel esponjoso de chocolate cubierto con ganache.",
        imagen: "../torta.jpg"
    },
    "Macarons de Colores": {
        descripcion: "Delicados y coloridos macarons franceses con rellenos variados.",
        imagen: "../macarons.jpg"
    }
};

export default function BlogPage(){
    return <div className='text-white'>
        <header className='bg-teal-500 p-6 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold mb-4'>Sabor Casero</h1>
            <h2>Las mejores recetas para cada ocasión</h2>
        </header>
        <main className="grid grid-cols-2">
            <div>
            {Object.entries(recetas).map(([clave, element]) => (
                <BlogCard 
                    key={clave} 
                    titulo={clave} 
                    descripcion={element.descripcion} 
                    img={element.imagen} 
                />
            ))}
            </div>
            <div>
            <ul className=' text-teal-700 rounded m-4 flex flex-col items-end italic py-6 mx-12'>
                {Object.entries(listaEnlaces).map(([clave, valor]) => (
                    <li className='hover:text-teal-500 my-6' key={clave}>
                        <a href={valor}>{clave}</a>
                    </li>
                ))}
            </ul>
            </div>
        </main>
    </div>
} 