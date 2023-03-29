import sapLogo from "./assets/saplogov2.png"

function App() {

  return (
    <div className=" text-white font-sans bg-blue-800">
      {/*Header*/}
      <nav className="bg-blue-900 py-4">
        <div className="container mx-auto px-4 flex justify-between align-middle">
          <div className="flex flex-row justify-start">
          <img src={sapLogo} alt="SAP Logo" width="50px" height="50px" className="mr-1"/>
          <a href="/" className="text-3xl font-bold ml-0">SAP</a>
          </div>
          <div className="flex">
            <a href="/signup" className="text-l font-bold mr-4">About</a>
            <a href="/signup" className="text-l font-bold mr-4">Contact</a>
          </div>
        </div>
      </nav>
      {/*Hero*/}
      <div className="h-screen flex flex-col justify-center items-center">
        <img src={sapLogo} alt="SAP Logo" width="300px" height="300px"/>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Salmon Arm Painting</h1>
        <p className="text-xl md:text-2xl mb-8">Best Painting in the Okanagan</p>
        <a href="#cta" className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded text-xl font-semibold">Learn More</a>
      </div>
      {/*Call to Action*/}
      <div id="cta" className="bg-blue-900 py-16">
        <div className="container flex-auto flex-col mx-auto px-4 justify-center align-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Want to join our team?</h2>
          <p className="text-xl md:text-2xl mb-8">Get in touch with us</p>
          <a href="/signup" className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-200 rounded text-xl font-semibold">CONTACT</a>
        </div>
      </div>
      {/*Footer*/}
      <div className="bg-sapcolor py-12">
        <div class="container mx-auto px-4 text-center">
        <p class="text-xl">&copy; Salmon Arm Painting 2023</p>
        </div>
      </div>
    </div>
  )
}

export default App
