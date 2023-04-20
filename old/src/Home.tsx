import React from "react";

type HomeProps = {
    logo: string;
}

const Home: React.FC<HomeProps> = ({logo}) => {
    return (
    <div id="home" className="h-screen flex flex-col justify-center items-center animate-fadeIn">
        <img src={logo} alt="SAP Logo" width="300px" height="300px"/>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Salmon Arm Painting</h1>
        <p className="text-xl md:text-2xl mb-8">Best Painting in the Okanagan</p>
        <a href="#contact" className="px-8 py-3 bg-gradient-to-b from-violet-400 to-violet-600 text-white rounded text-xl font-semibold hover:from-violet-600 hover:to-violet-400">Contact Us</a>
      </div>
    );
};

export default Home;