'use client'
import { useState } from "react";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex fixed top-0 w-full bg-blue-100 h-20">
        <img className=" w-10 h-10 m-4" src="/tienda.png"></img>
        
        <div className="hidden md:flex md:justify-center md:flex-1 md:items-center">
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Contacto</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Catálogo</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Sobre nosotros</a>
        </div>

        <div className="md:hidden flex justify-end flex-1 mx-10">
            <button className="" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>

        {isOpen && (
            <div className="absolute top-20 right-0 w-32 bg-blue-100 flex flex-col items-center gap-4 p-4 ">
                <a href="#" className="text-gray-700 hover:text-blue-500 w-full text-center">Contacto</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 w-full text-center">Catálogo</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 w-full text-center">Sobre nosotros</a>
            </div>
        )}
    </div>
}