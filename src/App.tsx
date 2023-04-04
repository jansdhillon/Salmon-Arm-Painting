import sapLogo from "./assets/saplogov3.png";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-900 text-white h-max font-roboto font-normal">
      <NavBar logo={sapLogo} />
      <Home logo={sapLogo} />
      <About/>
      <Contact />
      <Footer title="Salmon Arm Painting" />
    </div>
  )
}

export default App

