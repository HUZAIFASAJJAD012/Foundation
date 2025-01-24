import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import emailjs

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const submitForm = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if all form fields are filled out
    if (formData.name && formData.email && formData.message) {
      // EmailJS service and template IDs
      const serviceID = 'service_t3x3jwp';
      const templateID = 'template_vw2a1bm';
      const userID = 'sJzaxcLertBGYOxvT';

      // Send email using EmailJS
      emailjs.send(serviceID, templateID, {
        to_name: formData.name, // Replace with the recipient's name
        from_name: formData.email,
        from_email: formData.email,
        message: formData.message,
      }, userID)
      .then(() => {
        setResponseMessage('Thank you for your message!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setResponseMessage('Oops, something went wrong. Please try again later.');
      });
    } else {
      setResponseMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-[#023364FF]">
      <main className="max-w-screen-xl h-[100%] py-10 mx-auto p-5">
        <section className="contact-container bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-center text-3xl text-[#04113a] mb-2">Contact Us</h1>
          <p className="text-center mb-8">Have questions or feedback? We'd love to hear from you!</p>

          <div className="contact-wrapper flex flex-wrap gap-5 justify-between">
            <div className="contact-form flex-1 min-w-[300px]">
              <h2 className="text-[#04113a] text-2xl mb-4">Send a Message</h2>
              <form id="contactForm" onSubmit={submitForm}>
                <div className="form-group mb-4">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-[#04113a] rounded-md text-lg"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-[#04113a] rounded-md text-lg"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 border-2 border-[#04113a] rounded-md text-lg resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#20641d] text-white rounded-md hover:bg-[#1e5b16] transition"
                >
                  Submit
                </button>
                <p className="response-message text-green-500 mt-3 text-sm">{responseMessage}</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactForm;
