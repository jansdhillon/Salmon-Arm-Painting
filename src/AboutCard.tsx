import React from "react";

type AboutCardProps = {
    title: string;
    image: string;
    description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({title, image, description}) => {
    return (
        <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center align-baseline">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={image}/>
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