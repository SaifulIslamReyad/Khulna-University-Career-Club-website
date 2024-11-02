import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto flex flex-wrap items-center justify-between p-3">
        {/* Logo Section */}
        <a className="flex items-center" href="/">
          <img
            src="src/assets/images/logo.jpg"
            alt="KU Career Club Logo"
            className="w-12 mr-2"
          />
          <div>
            <div className="text-xl font-semibold">
              Khulna University Career Club
            </div>
            <small className="text-gray-500">Unveil Your Prospects</small>
          </div>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-gray-500 xl:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full xl:flex xl:items-center xl:justify-between xl:gap-3 xl:py-0 py-2 xl:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:ml-auto space-y-2 lg:space-y-0 lg:space-x-4 items-center">
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="about.html"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="events.html"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="gallery.html"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="segments.html"
              >
                Members
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-500" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-blue-500"
                href="contact.html"
              >
                Contact and FAQ
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-2 lg:mt-0 lg:flex-row flex-col">
            <a
              href="join.html"
              className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Join Us
            </a>
            <a
              href="login.html"
              className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
