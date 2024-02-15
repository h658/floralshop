export default function Header(){
    return(
        <>
        <nav className=" bg-pink-500 text-white py-1 " >
        <ul className="flex justify-around text-xl font-light tracking-widest items-center mx-20 my-2">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li className="font-bold text-3xl">BLOOM</li>
            <li>Gallery</li>
            <li>Workshop</li>
            <li>Contact</li>
        </ul>
        </nav>
        </>
    )
}