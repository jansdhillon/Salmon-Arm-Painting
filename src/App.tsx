import sapLogo from "./assets/saplogov3.png";
import {useLayoutEffect} from "react";
import AOS from "aos";
import lake from "./assets/lake.jpg";
import house from "./assets/house.jpg";
import paint from "./assets/paint.jpg";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import AboutCard from "./AboutCard";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {

  useLayoutEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-900 text-white h-max font-roboto font-normal">
      <NavBar logo={sapLogo} />
      <Home logo={sapLogo} />
      <div id="about" className=" flex  max-h-30 max-w-50 py-60 mb-60">
        <AboutCard title="Quality Service" image={paint} description="We offer exceptional and stunning house painting services to clients across the Okanagan."/>
        <AboutCard title="Great Pricing" image={house} description="Beautiful paint jobs don't have to cost a fortune! We help you achieve your dream home without breaking the bank."/>
        <AboutCard title="Locally Owned" image={lake} description="We are a local company based in Salmon Arm, BC. We are proud to serve the Okanagan Valley and surrounding areas."/>
      </div>
      <div id="contact" className="bg-violet-900 py-16">
        <div className="container flex-auto flex-col mx-auto px-4 justify-center align-center text-center">
          <h2 className="text-3xl font-bold mb-4">Get in touch with us!</h2>
          <ContactForm />
        </div>
      </div>
      <Footer title="Salmon Arm Painting" />
    </div>
  )
}

export default App

