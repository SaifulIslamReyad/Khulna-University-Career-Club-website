import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginHeader from "./LoginHeader";
const Login = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center mt-20 mx-auto gap-5">
        {/* Log in header section  */}
        <LoginHeader />
        {/* Login email and password */}
        <div className="flex flex-col gap-3">
          {/* Email */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="email" className="text-gray-600 px-1">
              Email :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="email"
                id="email"
                placeholder="info@gmail.com"
                className="w-96 h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
              <MdEmail className="absolute right-3 top-3 text-[#2193d0]" />
            </div>
          </div>
          {/* Password */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="password" className="text-gray-600 px-1">
              Password :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type={"password"}
                id="password"
                placeholder="************"
                className="w-96 h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
              <FaEyeSlash className="absolute right-3 top-3 text-[#2193d0] cursor-pointer" />
            </div>
          </div>
          <div className="text-right">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2193d0] text-sm underline-offset-1 border-[#2193d0] border-b-2"
            >
              Forget Password?
            </a>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <div>
            <button type="button" className="btn btn-primary w-full shadow-sm">
              Login
            </button>
          </div>
          <div className="flex items-center w-full">
            <hr className="bg-black w-44 h-[2px]" />
            <span className="text-sm mx-2 text-gray-600 font-semibold">OR</span>
            <hr className="bg-black w-44 h-[2px]" />
          </div>
          <div>
            <button type="button" className="btn btn-light w-full shadow-sm">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
