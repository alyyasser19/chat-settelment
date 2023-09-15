"use client";

import React, { useState } from "react";

function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const mailtoLink = `mailto:alyyasser19@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    );
  };

  return (
    <form
      id="Contact"
      className="p-8 rounded-md border-l-2 bg-gradient-to-t from-gray-100 to-slate-100 border-amber-400"
      onSubmit={handleSubmit}
    >
      <div className="form text-md">
        <h5 className="text-2xl font-extrabold mb-5">Get in touch</h5>
        <p className="my-2 ">
          Welcome to Chat Settlement, where your every desire is just a click
          away. We&#39;re your genie in a bottle, granting your wishes for the
          latest trends and unique treasures. Discover pharmaceutical excellence
          and holistic well-being with us.
        </p>
        <p className="mb-5">
          Connect today and let&#39;s embark on a journey to greatness. Our team
          is here to guide you toward a healthier, vibrant life. It&#39;s time
          to make your dreams a reality.
        </p>
        <input
          placeholder="Name"
          type="text"
          name="name"
          className="text-amber-500 outline-none p-2 mb-5 font-bold w-full transition duration-200 border-l-1 border-transparent focus:border-amber-400"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="text-amber-300 border-none outline-none p-2 mb-5 font-bold w-full transition duration-200 border-l-1 border-transparent focus:border-amber-400"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Subject"
          type="text"
          name="subject"
          className="text-amber-300 outline-none p-2 mb-5 font-bold w-full transition duration-200 border-l-1 border-transparent focus:border-amber-400"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          placeholder="Inquiry"
          name="message"
          className="text-amber-400 bg-dark-blue border-none outline-none p-2 font-bold resize-none max-h-48 mb-5 border-l-1 border-transparent focus:border-amber-400 transition duration-200 w-full"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <div className="button-container flex gap-4">
          <button
            type="submit"
            className="flex-grow bg-amber-400 p-2 text-dark-blue font-bold text-center  border-1 border-transparent transition duration-500   hover:text-white hover:border-solid hover:rounded-md hover:border-opacity-100"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
