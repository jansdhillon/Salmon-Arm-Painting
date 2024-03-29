import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Head from "next/head";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {

  return (
    <main className="bg-gradient-to-br from-purple-600 to-indigo-900 text-white min-h-screen font-roboto">
      <Head>
      <title>Salmon Arm Painting</title>
      <link rel="icon" href="/saplogov3.png" />
      </Head>
      <NavBar logo={"/saplogov3.png"} />
      <Home logo={"/saplogov3.png"}/>
      <About/>
      <Contact />
      <Footer />
    </main>
  );
}
