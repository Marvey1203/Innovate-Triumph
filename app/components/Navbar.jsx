import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="relative z-50">
            <div className="w-3/4 mx-auto flex flex-row justify-between items-center py-8">
            <Image
                src={"/ITLogo.webp"}
                priority
                width={200}
                height={50}
                alt="Innovate Triumph Development Studio Logo"
            />
            <svg className="w-8 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
            </svg>

        </div>
        </div>
        
     );
}
 
export default Navbar;