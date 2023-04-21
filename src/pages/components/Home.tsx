import React from "react";
import Image from 'next/image'
import Link from 'next/link'

type HomeProps = {
    logo: string;
}

const Home: React.FC<HomeProps> = ({logo}) => {
    return (
    <div id="home" className="h-screen flex flex-col justify-center items-center animate-fadeIn text-violet-900">
        <Image src={logo} alt="SAP Logo" width="300" height="300"/>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Salmon Arm Painting</h1>
        <p className="text-xl md:text-2xl mb-8">Best Painting in the Okanagan</p>
        <Link href="#contact" className="px-8 py-3 bg-gradient-to-b from-violet-300 to-violet-700 text-white rounded text-xl font-semibold hover:from-violet-400 hover:to-violet-200 hover:text-violet-800">Contact Us</Link>
      </div>
    );
};

export default Home;