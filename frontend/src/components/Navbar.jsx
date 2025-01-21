import { useLogoutUserMutation } from "@/features/api/authApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const logoutHandler = async () => {
    await logoutUser();
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(data.message);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  return (
    <>
      {/* Navbar Section */}
      <nav className="bg-white shadow-lg fixed w-full z-20 top-0 left-0">
        <div className="mx-auto flex items-center justify-between p-3">
          {/* Image Section */}
          <div className="flex items-center">
            <img
              src="src/assets/images/ss.png"
              alt="Screenshot"
              className="w-full h-auto cursor-pointer"
              onClick={() => navigate("/")}
              style={{
                maxWidth: "90%",
                maxHeight: "11vh",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-gray-500 xl:hidden ml-4"
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

          {/* Desktop Navigation Links (Horizontal layout) */}
          <div className="hidden xl:flex xl:items-center xl:gap-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/" ? "text-blue-500" : "text-black"
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/about"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/events"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/gallery"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/members"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="/members"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/blog"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`text-gray-700 hover:text-blue-500 ${
                    location.pathname === "/qna"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                  to="/qna"
                >
                  Contact and FAQ
                </Link>
              </li>
            </ul>

            {/* Action Buttons for User */}
            {!user ? (
              <div className="flex space-x-4">
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
              <div className="flex space-x-4">
                <Link
                  to="/profile"
                  className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  {user?.name}
                </Link>

                <button
                  onClick={logoutHandler}
                  className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Background Overlay (for mobile menu) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
        style={{ zIndex: "10" }}
      />

      {/* Sidebar for mobile menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: "20" }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/" ? "text-blue-500" : "text-black"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/about" ? "text-blue-500" : "text-black"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/events" ? "text-blue-500" : "text-black"
              }`}
              to="/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/gallery"
                  ? "text-blue-500"
                  : "text-black"
              }`}
              to="gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/members"
                  ? "text-blue-500"
                  : "text-black"
              }`}
              to="/members"
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/blog" ? "text-blue-500" : "text-black"
              }`}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === "/qna" ? "text-blue-500" : "text-black"
              }`}
              to="/qna"
            >
              Contact and FAQ
            </Link>
          </li>
        </ul>

        {/* Action Buttons for User */}
        {!user ? (
          <div className="flex flex-col items-center space-y-2 p-4">
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
          <div className="flex flex-col items-center space-y-2 p-4">
            <Link
              to="/profile"
              className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {user.username}
            </Link>
            <Link
              to="/"
              className="bg-[#105369] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Log Out
            </Link>
          </div>
        )}
      </div>

      {/* Add margin-top for content below navbar */}
      <div style={{ marginTop: "80px" }}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
