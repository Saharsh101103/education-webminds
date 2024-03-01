"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Menu, User, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const wrapperclasses = classNames(
        "flex flex-col absolute top-0 w-[70%] max-h-screen h-screen text-white bg-gradient-to-b from-[#0F4551] to-[#0c0c0c] py-10 px-10 gap-24 transition-all duration-500 z-10", {
            ["translate-x-0 opacity-100"]:isOpen, 
            ["-translate-x-full opacity-0"]:!isOpen, 
        }
    )
    const [isScrollingUp, setIsScrollingUp] = useState(true);
	const prevScrollY = useRef(0);

    useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY < (prevScrollY.current || 0)) {
			setIsScrollingUp(true);
		} else {
			setIsScrollingUp(false);
		}
		prevScrollY.current = window.scrollY;
	};
    

    return (
        <nav className='font-catamaran'>
            <section className={classNames('transition-all fixed text-white bg-gradient-to-b from-[#0F4551] to-[#0c0c0c]  min-w-full hidden md:flex justify-between items-center w-full p-10 h-20 -translate-y-full z-10 duration-300',
				{
					"translate-y-0": isScrollingUp,
				},)}>

                <div className='flex justify-evenly w-fit h-full gap-2 items-center'>

                    <Link href={''}>
                        <div className='h-12 w-12 rounded-full relative bg-cover flex justify-center items-center p-1  border-white border-2'>
                            <Image src={'/logo.svg'} alt={''} width={42} height={42} className='hover:scale-110 transition-all duration-500' />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className='h-11 border-2 border-white w-24 flex justify-center items-center rounded-3xl '>
                            <p className='hover:scale-110 transition-all duration-500'>Home</p>
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className='h-11 border-2 border-white w-24 flex justify-center items-center rounded-3xl '>
                            <p className='hover:scale-110 transition-all duration-500'>Contact</p>
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className='h-11 border-2 border-white w-24 flex justify-center items-center rounded-3xl '>
                            <p className='hover:scale-110 transition-all duration-500'>Discussion</p>
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className='h-11 border-2 border-white w-24 flex justify-center items-center rounded-3xl '>
                            <p className='hover:scale-110 transition-all duration-500'>Courses</p>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-evenly w-fit h-full gap-2 items-center'>
                    <Link href={''}>
                        <div className='h-11 border-2 border-white w-24 flex justify-center items-center rounded-3xl '>
                            <p className='hover:scale-110 transition-all duration-500'>
                                Sign In
                            </p>
                        </div>
                    </Link>
                    <Link href={''}>
                        <div className='h-16 border-2 border-white w-16 flex justify-center items-center rounded-full '>
                            <User className='scale-150 hover:scale-[1.75] transition-all duration-500' />
                        </div>
                    </Link>

                </div>
            </section>
            <section className="md:hidden">
                <div className='p-4 bg-[#304c58]'>

                    <Menu className='text-white'  onClick={()=>setisOpen(!isOpen)}/>
                    <ChevronLeft className={classNames('absolute right-[32%] text-white top-[45%] z-50 scale-150 transition-all delay-700', {["hidden -translate-x-full"]:!isOpen,["block translate-x-0"]:isOpen})} onClick={()=>setisOpen(!isOpen)}/>
                </div>
                <div className={wrapperclasses}>
                    <div className='w-full flex flex-col gap-10 justify-center items-center'>
                       <Link href={''}>
                        <Image src={'/logo.svg'} alt={''} width={100} height={100} className='' />
                       </Link>
                    <Link href={''} className='flex flex-row  gap-5'> 
                    <User className='scale-150' />
                    <p>Sign In</p>
                    </Link>
                    </div>
                    <div className='flex flex-col gap-10'>
                    <Link href={''} className='border-2 w-24 flex justify-center items-center h-10 rounded-3xl'> <p>Home</p> </Link>
                    <Link href={''} className='border-2 w-24 flex justify-center items-center h-10 rounded-3xl'> <p>Contact</p> </Link>
                    <Link href={''} className='border-2 w-24 flex justify-center items-center h-10 rounded-3xl'> <p>Discussion</p> </Link>
                    <Link href={''} className='border-2 w-24 flex justify-center items-center h-10 rounded-3xl'> <p>Courses</p> </Link>
                    </div>
                </div>
            </section>


        </nav>
    )
}

export default Navbar
