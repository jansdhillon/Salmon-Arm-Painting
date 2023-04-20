import Image from 'next/image';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

export default function App() {

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-900 text-white min-h-screen font-roboto">
      <NavBar logo={"/saplogov3.png"} />
      <Home logo={"saplogov3.png"}/>
      <About/>
      <Contact />
      <Footer />
    </div>
  )
}
