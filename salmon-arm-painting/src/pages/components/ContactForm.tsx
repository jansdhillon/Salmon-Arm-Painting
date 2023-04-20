import React, {useState, FormEvent} from 'react';
import axios from "axios";

type ContactInfo = {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  const ContactForm: React.FC = () => {
    const [contactInfo, setContactInfo] = useState<ContactInfo>({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact information submitted:', contactInfo);
  
    try {
      const response = await axios.post('http://localhost:3000/api/save-contact', contactInfo);
      console.log(response.data);
      
    } catch (error) {
      console.error('Error saving contact information:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={contactInfo.name}
            onChange={handleChange}
            className="mt-1 block w-full text-black rounded-md focus:purple-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={contactInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={contactInfo.phone}
            onChange={handleChange}
            className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={contactInfo.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md text-black border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-b from-violet-400 to-violet-600 text-white rounded text-xl font-semibold hover:bg-gradient-to-br hover:from-violet-600 hover:to-violet-400 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default ContactForm;

