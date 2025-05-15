import React, { useState } from "react";
import { toast } from 'react-toastify';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const changehandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  

  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Message Sent Successfully!");
        console.log(data);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
        console.error(data.error);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };
  


  return (
    <section className="c-space my-20 w-full" id="contact">
      <div className="flex items-center justify-center gap-4 relative">
        <p className="head-text">GET IN TOUCH</p>

        <div className="relative w-[50px] h-[50px]">
          <img
            src="assets/email1.svg"
            alt="Email Icon"
            className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 opacity-70"
            
          />
        </div>
      </div>

      <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">📞 Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Reach out to me via email, or by filling out the contact form.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  📧 <span className="text-gray-800 font-medium">raiankitsr@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  📍 <span className="text-gray-800 font-medium">Ahmedabad , Science City</span>
                </li>
              </ul>
            </div>
  
          
            <div className="bg-white p-6 rounded-lg shadow-md">
             
              <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                  <label  className="block text-gray-700 font-medium">Your Name</label>
                  <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={changehandler}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1" 
                  placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Email</label>
                  <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={changehandler}
                  placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea 
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1" 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  required
                  onChange={changehandler}
                  placeholder="Write your message..."></textarea>
                </div>
                <button className="bg-black-600 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-white-700  hover:text-black-500 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
    </section>
  );
};

export default Contact;
