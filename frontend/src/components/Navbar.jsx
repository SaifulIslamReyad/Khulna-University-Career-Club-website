import { setAuthUser } from "@/redux/authSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("https://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto flex flex-wrap items-center justify-between p-3">
        {/* Logo Section */}
        <Link className="flex items-center" to="/">
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
        </Link>

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
              <Link className="text-gray-700 hover:text-blue-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/event">
                Events
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/members">
                Members
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/qna">
                Contact and FAQ
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          {!user ? (
            <div className="flex items-center justify-center space-x-2 lg:mt-0 lg:flex-row flex-col">
              <Link
                to="/signup"
                className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Join Us
              </Link>
              <Link
                to="/login"
                className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Log In
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2 lg:mt-0 lg:flex-row flex-col">
              <Link
                to="/profile"
                className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                tajbid
              </Link>
              <Link
                to="/"
                onClick={logoutHandler}
                className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
