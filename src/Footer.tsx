import React from 'react';

    type FooterProps = {
        title: string;
    }

    const Footer: React.FC<FooterProps> = ({title}) => {
        return (
            <div className="bg-violet-800 py-6">
                <div className="container mx-auto px-4 text-center content-center">
                <p className="text-xl font-bold">&copy; {title}</p>
                </div> 
            </div>
        );
}

export default Footer;
