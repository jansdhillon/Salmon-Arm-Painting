import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-900 text-white min-h-screen font-roboto">
      <NavBar logo={"/saplogov3.png"} />
      <Home logo={"/saplogov3.png"} />
      <About/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

