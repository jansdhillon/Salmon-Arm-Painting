import React from "react";
import Image from 'next/image'

type NavBarProps = {
    logo: string;
}

const NavBar: React.FC<NavBarProps> = ({logo}) => {
    return (
      <nav className="bg-violet-900 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 flex justify-between text-center items-center">
          <div className="flex flex-row justify-start">
          <a href="/home">
          <Image src={logo} alt="SAP Logo" width="90" height="90" className=" mr-1 object-fit object-contain"/>
          </a>
          </div>
          <div className="flex text-l font-bold">
            <a href="#about" className="mr-4 hover:text-purple-100">About</a>
            <a href="#contact" className="mr-4 hover:text-purple-100">Contact</a>
          </div>
        </div>
      </nav>
    )
};

export default NavBar;
