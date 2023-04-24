import React, {useEffect} from "react";
import Image from 'next/image';
import Aos from "aos";

type AboutCardProps = {
    title: string;
    image: string;
    description: string;
}



const AboutCard: React.FC<AboutCardProps> = ({title, image, description}) => {

    useEffect(() => {
        Aos.init({
          duration: 1000, // You can customize the animation duration
        });
      }, []);
    return (
        <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center align-baseline animate-fadeIn">
            <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-right">
                <Image className="w-full" src={image} alt={title} width="300" height="300"/>
                <div className="bg-violet-900 px-6 py-4">
                    <p className="text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;