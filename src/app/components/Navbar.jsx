"use client";

import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FloatingDock } from "./ui/floating-dock";
import { color } from "framer-motion";

const dockItems = [
  {
    title: "About",
    href: "#aboutme",
    href: "#aboutme",

    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/deco-color/48/about.png"
        alt="about"
      />
    ),
  },
  {
    title: "Projects",
    href: "#projects",
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/deco-color/48/test-passed.png"
        alt="test-passed"
      />
    ),
  },
  {
    title: "Contact",
    href: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-address-book"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
        <path d="M10 16h6" />
        <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M4 8h3" />
        <path d="M4 12h3" />
        <path d="M4 16h3" />
      </svg>
    ),
  },
  {
    title: "Skills",
    href: "#skills",
    icon: (
<Image width="48" height="48" src="/images/projects/hard-skills.png" alt="user-settings"/>    ),
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
    <FloatingDock
      items={dockItems}
      desktopClassName="your-desktop-class"
      mobileClassName="your-mobile-class"
    />

    //  <div className="container mx-auto px-4 py-2 flex items-center justify-between">
    //   <div className="hidden md:flex flex-grow justify-center">
    //     <ul className="flex space-x-8">
    //       {dockItems.map((link, index) => (
    //         <li key={index}>
    //           <NavLink href={link.href} title={link.title} />
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   <div className="block md:hidden">
    //     {!navbarOpen ? (
    //       <button
    //         onClick={() => setNavbarOpen(true)}
    //         className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //       >
    //         <Bars3Icon className="h-5 w-5" />
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => setNavbarOpen(false)}
    //         className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //       >
    //         <XMarkIcon className="h-5 w-5" />
    //       </button>
    //     )}
    //   </div>
    // </div>

    //   {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
    // {/* </nav> */}
  );
};

export default Navbar;
