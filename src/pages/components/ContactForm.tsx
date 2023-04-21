import React, { useState, FormEvent } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleClose();
    console.log("Contact information submitted:", contactInfo);

    try {
      const response = await axios.post("/api/save-contact", contactInfo);
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error("Error saving contact information:", error);
    }
  };

  const resetForm = () => {
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-b from-violet-400 to-violet-600 text-white rounded text-xl font-semibold hover:bg-gradient-to-br hover:from-violet-600 hover:to-violet-400 "
        >
          Submit
        </button> */}
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="w-full py-2 px-2 bg-gradient-to-b from-violet-300 to-violet-700 text-white rounded text-xl font-semibold hover:from-violet-400 hover:to-violet-200 hover:text-violet-800 "
        >
          Submit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Submit Form?"}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} autoFocus type="submit">
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default ContactForm;
