
import React, {useEffect} from "react";
import AboutCard from "./AboutCard";


const About: React.FC = () => {

    

    return (
        <div id="about" className=" flex max-h-30 max-w-50 py-60 mb-60 items-center flex-wrap">
            <AboutCard title="Quality Service" image={"/paint.jpg"} description="We offer exceptional and stunning house painting services to clients across the Okanagan."/>
            <AboutCard title="Great Pricing" image={"/house.jpg"} description="Beautiful paint jobs don't have to cost a fortune! We help you achieve your dream home without breaking the bank."/>
            <AboutCard title="Locally Owned" image={"/lake.png"} description="We are a local company based in Salmon Arm, BC. We are proud to serve the Okanagan Valley and surrounding areas."/>
        </div>
    );

};

export default About;