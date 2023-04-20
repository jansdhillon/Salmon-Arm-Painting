import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
    return (
        <div id="contact" className="bg-violet-900 py-16">
            <div className="container flex-auto flex-col mx-auto px-4 justify-center align-center text-center">
            <h2 className="text-3xl font-bold mb-4">Get in touch with us!</h2>
            <ContactForm />
            </div>
        </div>
        );
};

export default Contact;
