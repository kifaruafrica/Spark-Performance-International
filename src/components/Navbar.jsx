import React, {useState, useEffect} from 'react'
import { Link } from "react-scroll";

const Navbar = () => {

    //state
    const [sidebar, setsidebar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const offsetThreshold = 50;
    
        setIsSticky(scrollTop > offsetThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={
        isSticky
        ? "fixed bg-white h-20 w-full top-0 z-20"
        : " bg-white h-20 "
    }
    
    >
            <div className='container mx-auto'>
    
        <div className=' hidden md:flex space-around md:justify-between items-center py-1'>
<div className='text-slate-700 font-medium cursor-pointer' >
Spark Performance International
</div>
<div>
    <ul className=' space-x-6  md:flex cursor-pointer'>
        <li className='text-slate-700 hover:text-red-500 font-semibold'>
        <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
        </li>
                    <li className='text-slate-700 hover:text-red-500 font-semibold'>
                        
                    <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About
            </Link>
        </li>
        <li  className='text-slate-700 hover:text-red-500 font-semibold'>
        <Link
                activeClass="active"
                to="Our Services"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Our Services
            </Link>
        </li>
        <li  className='text-slate-700 hover:text-red-500 font-semibold'>
        <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Pricing
            </Link>
        </li>
        <li  className='text-slate-700 hover:text-red-500 font-semibold'>
                        
                        <Link
                activeClass="active"
                to="Why We Succeed"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Why we succeed
            </Link>
        </li>
        <li  className='text-slate-700 hover:text-red-500 font-semibold'>
                    
                        <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Contact us
            </Link>
        </li>

    </ul>

</div>
<div>
<Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer"
    >
        <button className='px-2  py-6 bg-red-500 hover:bg-slate-700 text-white '>
        <p className='font-light'>GET CONSULTATION</p>
        </button>
    </Link>
</div>
                
                    </div>
        <div className="md:hidden  z-30 text-slate-600  flex justify-between"
            onClick={() => setsidebar(!sidebar)} 
            >
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor" className="w-10 h-10 m-4">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <img
                            className='text-slate-900'
                            src="" alt="" />

    </div>

                </div>
                </div>
    <div className={
                sidebar
                    ? "bg-blue-900 h-full w-full z-20 fixed top-0 md:hidden  " 
                    : "h-full w-full fixed top-0 hidden"
            }
            >   
                <div className=
                    " w-[85%] mx-auto text-white font-medium text-xl">
                    <div className=' flex justify-between'>
                        <div>
                            <img src="" alt="logo" className="text-white" /></div>
                        <div className=''
                            onClick={() => setsidebar(!sidebar)} 
                        >
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>


                        </div>
                    </div>
                    <ul className=' flex  flex-col space-y-8 text-center cursor-pointer '>
        <li className='text-white-700    hover:text-red-500 font-semibold'>
                    <Link
                onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
        </li>
                    <li className='text-white hover:text-red-500 font-semibold'>
                        
                            <Link
                        onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About
            </Link>
        </li>
        <li  className='text-white hover:text-red-500 font-semibold'>
                            <Link
                        onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="Our Services"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Our Services
            </Link>
        </li>
        <li  className='text-white hover:text-red-500 font-semibold'>
                            <Link
                            onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Pricing
            </Link>
        </li>
        <li  className='text-white hover:text-red-500 font-semibold'>
                        
                            <Link
                                onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="Why We Succeed"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Why we succeed
            </Link>
        </li>
        <li  className='text-white hover:text-red-500 font-semibold'>
                    
                            <Link
                            onClick={() => setsidebar(!sidebar)}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Contact us
            </Link>
        </li>

    </ul>

                    <div>
            
            </div>
                </div>
                </div>
            </div>
        
    
)
}

export default Navbar