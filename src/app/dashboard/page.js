import NavbarDB from "./NavbarDB"
import NavSide from "./NavSide"
import BDCard from "./BDCard"
import Table from "./Table"
const enlaces = [
    {
        'title': 'Últimas noticias',
        'enlace': '#'
    },
    {
        'title': 'Cursos',
        'enlace': '#'
    },
    {
        'title': 'Sobre nosotros',
        'enlace': '#'
    },
    {
        'title': 'Contacto',
        'enlace': '#'
    }
]

const noticias = [
    {
        'titulo': 'Espacio',
        'descripcion': 'El riesgo de que la basura espacial impacte los aviones está aumentando',
        'img': '../espacio.jpg'
    },
    {
        'titulo': 'Cerebro',
        'descripcion': 'Las pastillas para dormir pueden tener efectos inesperados en el cerebro dormido',
        'img': '../cama.jpg'
    },
    {
        'titulo': 'Física',
        'descripcion': 'Científicos descubren una nueva clase de estados cuánticos en el grafeno',
        'img': '../grapeno.jpg'
    }
]

const table = [
    { nombre: "Microbios en Marte", investigador: "Dr. J. Doe", fecha: "2023-06-15", area: "Astrobiología", resultado: "Microbios detectados" },
    { nombre: "Fusión Nuclear Estable", investigador: "Dr. J. Smith", fecha: "2024-01-23", area: "Física Nuclear", resultado: "Energía positiva" },
    { nombre: "Computación Cuántica", investigador: "Dr. E. Watson", fecha: "2022-11-10", area: "Informática", resultado: "Simulación proteína" },
    { nombre: "Tejidos Humanos", investigador: "Dr. M. Lee", fecha: "2025-03-02", area: "Biotecnología", resultado: "Tejidos cultivados" },
    { nombre: "Genética Climática", investigador: "Dr. S. Green", fecha: "2023-08-29", area: "Genética", resultado: "Plantas resistentes" },
    { nombre: "Viaje Espacial", investigador: "Dr. A. Cruz", fecha: "2026-05-14", area: "Exploración Espacial", resultado: "Viaje de 5 años" },
    { nombre: "Robots Emocionales", investigador: "Dr. L. Chang", fecha: "2024-09-10", area: "Robótica", resultado: "Robot emocional" },
    { nombre: "Partículas Subatómicas", investigador: "Dr. P. White", fecha: "2022-12-04", area: "Física", resultado: "Nueva partícula" },
    { nombre: "Órganos Sintéticos", investigador: "Dr. A. Miller", fecha: "2025-02-19", area: "Ingeniería Biomédica", resultado: "Órganos sintéticos" },
    { nombre: "Energía de Plástico", investigador: "Dr. C. González", fecha: "2024-07-25", area: "Energía", resultado: "Plástico reciclado en energía" },
];

export default function DashboardPage(){
    return <div className='text-gray-700 mt-40 h-screen'>
        <header>
            <NavbarDB img='../scientistic.png' titulo='Scientistic' subtitulo='Conocimiento científico al alcance de todos'></NavbarDB>
        </header>
        <main className="grid grid-cols-[auto,1fr] h-screen">
            <div className="grid grid-cols-1 grid-rows-2">
                <div className="flex flex-wrap md:flex-nowrap">
                    {
                        noticias.map((noticia) => 
                            <BDCard titulo={noticia.titulo} img={noticia.img} descripcion={noticia.descripcion}></BDCard>
                        )
                    }
                </div>
                <Table header={Object.keys(table[0])} rows={table}></Table>
            </div>
            <div className="flex justify-end h-screen ">
                <NavSide enlaces={enlaces}></NavSide>
            </div>
        </main>
    </div>
} 