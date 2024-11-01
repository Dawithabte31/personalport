"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const dockItems = [
  {
    title: "GitHub",
    icon: <Image src={GithubIcon} alt="GitHub" width={30} height={30} />,
    href: "https://github.com/Dawithabte31",
  },
  {
    title: "LinkedIn",
    icon: <Image src={LinkedinIcon} alt="LinkedIn" width={30} height={30} />,
    href: "https://www.linkedin.com/in/dawit-habitamu-70038a260",
  },
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");  // State for email input
  const [message, setMessage] = useState("");  // State for message input

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      message,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setEmailSubmitted(true);
      setEmail("");  // Clear email input
      setMessage("");  // Clear message input
      // Hide the success message after 1 second
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center h-screen relative" // Center the content vertically and horizontally
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-64 w-64 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10 flex flex-col items-center w-full lg:w-1/2 px-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-16">
          Contact Me
        </h2>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            {/* <label htmlFor="email" className="text-white text-sm font-medium">
              Your email
            </label> */}
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 mt-1"
              placeholder="Your email"
              value={email}  // Controlled input
              onChange={(e) => setEmail(e.target.value)}  // Update state on change
            />
          </div>
          <div className="mb-6">
            {/* <label htmlFor="message" className="text-white text-sm font-medium">
              Message
            </label> */}
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 mt-1"
              placeholder="Let's talk about..."
              rows="6"
              value={message}  // Controlled input
              onChange={(e) => setMessage(e.target.value)}  // Update state on change
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Send
            </button>
            {/* Social Icons */}
            <div className="flex space-x-4 ml-4">
              {dockItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-150"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </form>
        {emailSubmitted && ( // Display success message without hiding the form
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
