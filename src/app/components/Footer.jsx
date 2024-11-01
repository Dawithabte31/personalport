import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#33353F] text-white bg-transparent">
      <div className="container p-12 flex flex-col items-center">
        <p className="text-center text-sm mb-4 text-slate-600">
          © 2024 All rights reserved.
        </p>
        <p className="text-center text-sm text-slate-600">
          About this page: Developed with <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Framer Motion</strong>, and hosted on <strong>Vercel</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
