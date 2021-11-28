import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className=" shadow-md fixed w-full z-10  border-gray-50 bg-white">
            {/* <div className = 'logo'>
                <Image src="/logo.png" width = {128} height = {77}/>
            </div> */}
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items-center  mx-20  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                                <Image src="/logo.png" width = {111} height = {60}/>
                                <h1 className=" font-bold text-2xl cursor-pointer">
									My<span className="text-blue-500">Garage</span>
								</h1>

                        </div>
                        <div className="ml-10 flex items-baseline space-x-4">
                        <Link href = "/feature">
                            <a>Feature</a>
                        </Link>
                        <Link href = "/about">
                            <a>About Us</a>
                        </Link>
                        <Link href = "/faq">
                            <a>FAQ</a>
                        </Link>
                        <Link href = "/pricing">
                            <a>Pricing</a>
                        </Link>
                        <Link href = "/contact">
                            <a>Contact Us</a>
                        </Link>
                        <Link href = "/login">
                            <a>Login</a>
                        </Link>
                        </div>

                    </div>
                </div>

            </div>
            {/* <Link href = "/feature"><a>feature</a></Link> */}
        </nav>
        </>
    )
}

export default Navbar
