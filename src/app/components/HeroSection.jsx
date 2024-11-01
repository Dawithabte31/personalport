"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="mx-auto bg-transparent w-full flex items-center  justify-center h-screen px-4 sm:px-5 lg:px-6">
        <div className="bg-transparent text-center w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Title */}
            <p className="text-[#BDC6CC] text-xs sm:text-base mb-5 lg:mb-4 lg:text-lg leading-relaxed">
              <span className="block text-white mb-2  text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                  Hello, I&apos;m Dawit
                </span>
              </span>

              <span className="text-white text-[15px] sm:text-base lg:text-lg">
                <span className="font-light text-gray-300">
                  , a Full Stack Developer. I love crafting websites and apps
                  that combine seamless functionality with great design,
                  ensuring a
                </span>
                <span className="font-semibold text-gray-400"> smooth and</span>
                <span className="font-semibold text-gray-400">
                  {" "} engaging user experience
                </span>
                .
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <Link
                href="/#contact"
                className="self-center w-[35%] md:w-[35%] lg:w-[30%] py-2 sm:py-2 md:py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-sm sm:text-base md:text-lg lg:text-xl text-white transition-transform duration-300 ease-in-out hover:scale-[105%]"
              >
                Contact Me
              </Link>

              <a
                href="/Dawit Habitamu Tewonde (2).pdf"
                download="Dawit Habitamu Tewonde (2).pdf"
                className="w-[35%] self-center md:w-[45%] lg:w-[30%] py-2 sm:py-2 md:py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-sm sm:text-base md:text-lg lg:text-xl text-white transition-transform duration-300 ease-in-out hover:scale-[105%]"
              >
                <div className="flex flex-row justify-center items-center gap-1">
                  <p className="text-sm sm:text-base md:text-lg">Download CV</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-download"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
