/* eslint-disable react-hooks/exhaustive-deps */
import { MdEmail } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "@/components/LoginHeader";
import { useLoginUserMutation } from "@/features/api/authApi";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { data, error, isLoading, isError }] =
    useLoginUserMutation();
  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevents button from triggering form submission
    setShowPassword((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    await loginUser(input);
    setInput({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    if (data) {
      console.log(data.message);
      navigate("/");
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isError]);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center mt-20 mx-auto gap-5">
        <form
          onSubmit={loginHandler}
          className="w-full h-full flex flex-col items-center justify-center mt-20 mx-auto gap-5"
        >
          {/* Log in header section */}
          <LoginHeader />

          {/* Login email and password */}
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
              <label htmlFor="email" className="text-gray-600 px-1">
                Email:
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="info@gmail.com"
                  className="w-96 h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
                  required
                />
                <MdEmail className="absolute right-3 top-3 text-[#2193d0]" />
              </div>
            </div>

            {/* Password */}
            <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
              <label htmlFor="password" className="text-gray-600 px-1">
                Password:
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  placeholder="********"
                  className="w-96 h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
                  required
                />
                <button
                  className="absolute right-3 top-3 text-[#2193d0] cursor-pointer border-none"
                  aria-label="Toggle Password Visibility"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash aria-label="Hide Password" />
                  ) : (
                    <FaEye aria-label="Show Password" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#2193d0] text-sm underline-offset-1 border-[#2193d0] border-b-2"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-20">
            <div>
              {isLoading ? (
                <button className="btn btn-primary w-full shadow-sm" disabled>
                  <Loader2 className="animate-spin" />
                  Please Wait
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary w-full shadow-sm"
                >
                  Login
                </button>
              )}
            </div>
            <div className="flex items-center w-full">
              <hr className="bg-black w-44 h-[2px]" />
              <span className="text-sm mx-2 text-gray-600 font-semibold">
                OR
              </span>
              <hr className="bg-black w-44 h-[2px]" />
            </div>
            <div>
              <Link to="/signup">
                <button
                  type="button"
                  className="btn btn-light w-full shadow-sm"
                >
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
