"use client"
import NavigationMenuDemo from "../utilities/Navigationmenu";
import Link from "next/link";
import { useCallback } from "react";

export default function Header(){

    const scroll = useCallback((id) =>{
        const element = document.getElementById(id)
        if(!element) return;
        element.scrollIntoView({behavior: 'smooth'})
    },[])

    return(
        <>
        <nav className=" bg-pink-500 text-white py-1 " >
        <ul className="flex justify-around text-xl font-light tracking-widest items-center mx-20 my-2">
            <Link href={'/'}><li>Home</li></Link>
            <li>Services</li>
            <li>About</li>
            <li className="font-bold text-3xl">BLOOM</li>
            <li onClick={()=>{scroll('category')}} className="cursor-pointer">Gallery</li>
            <li>Workshop</li>

            <li>
                <NavigationMenuDemo/>
            </li>
           
        </ul>
        </nav>
        </>
    )
}