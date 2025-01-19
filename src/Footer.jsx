import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0  w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © Siddharth Rukadikar. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition"
            target="_blank"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition"
            target="_blank"
          >
            Terms of Service
          </a>
          <a
            href="https://github.com/"
            className="text-blue-400 hover:text-blue-600 transition"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
