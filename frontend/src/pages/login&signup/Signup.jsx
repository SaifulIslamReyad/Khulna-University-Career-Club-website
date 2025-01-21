import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import LoginHeader from "@/components/LoginHeader";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentID: "",
    hometown: "",
    mobile: "",
    discipline: "",
    skills: "",
    expectation: "",
    hire: "",
  });

  const [cv, setCv] = useState(null); // To store the CV file
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const toggleConPasswordVisibility = (e) => {
    e.preventDefault();
    setShowConPassword((prevState) => !prevState);
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }
    const validFormats = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validFormats.includes(file.type)) {
      toast.error(
        "Invalid file format. Please upload a PDF, DOC, or DOCX file."
      );
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // Limit file size to 5MB
      toast.error("File size exceeds the 5MB limit.");
      return;
    }
    setCv(file);
    toast.success("CV uploaded successfully!");
  };

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(input).forEach((key) => {
      formData.append(key, input[key]);
    });
    if (cv) {
      formData.append("cv", cv);
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
        setInput({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          studentID: "",
          hometown: "",
          mobile: "",
          discipline: "",
          skills: "",
          expectation: "",
          hire: "",
        });
        setCv(null);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <LoginHeader />
        {/* Name */}
        <form
          onSubmit={signupHandler}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-full p-5"
        >
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="name"
              className="text-gray-600 px-1  position-relative"
            >
              Name:{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                id="name"
                placeholder="Enter your name"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* Email */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="email"
              className="text-gray-600 px-1 position-relative"
            >
              Email :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="info@gmail.com"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* Home Town */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="homeTown"
              className="text-gray-600 px-1 position-relative"
            >
              Home Town :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="homeTown"
                name="hometown"
                value={input.hometown}
                onChange={changeEventHandler}
                placeholder="Enter your home town"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Student Id */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="studentId"
              className="text-gray-600 px-1 position-relative"
            >
              Student ID :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="studentId"
                name="studentID"
                value={input.studentID}
                onChange={changeEventHandler}
                placeholder="Enter your student id"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* password */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="email"
              className="text-gray-600 px-1 position-relative"
            >
              Password :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
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

          {/* Moblie No */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="moblieNo"
              className="text-gray-600 px-1 position-relative"
            >
              Mobile No :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="mobileNo"
                name="mobile"
                value={input.mobile}
                onChange={changeEventHandler}
                placeholder="Enter your mobile no"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Discipline */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="discipline"
              className="text-gray-600 px-1 position-relative"
            >
              Discipline :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="discipline"
                name="discipline"
                value={input.discipline}
                onChange={changeEventHandler}
                placeholder="Enter your discipline"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label
              htmlFor="confirmPassword"
              className="text-gray-600 px-1 position-relative"
            >
              Confirm Password :{" "}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={changeEventHandler}
                placeholder="********"
                className="w-96 h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
                required
              />
              <button
                className="absolute right-3 top-3 text-[#2193d0] cursor-pointer border-none"
                aria-label="Toggle Password Visibility"
                onClick={toggleConPasswordVisibility}
              >
                {showConPassword ? (
                  <FaEyeSlash aria-label="Hide Password" />
                ) : (
                  <FaEye aria-label="Show Password" />
                )}
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="skills" className="text-gray-600 px-1">
              Skills :{" "}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="skills"
                placeholder="Enter your skills"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* Expectation */}
          <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="expectation" className="text-gray-600 px-1">
              What do you expect from club? :{" "}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="expectation"
                placeholder="Write your expectation"
                className="w-full h-40 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* hire */}
          <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="hire" className="text-gray-600 px-1">
              Why will we hire you? :{" "}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="hire"
                placeholder="Write your expectation"
                className="w-full h-40 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* Drop cv and submit button */}
          <div className="grid max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="cv" className="text-gray-600 px-1">
              Upload CV:
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleCvUpload}
              className="w-full h-10 outline-gray-300 bg-gray-50 p-1 px-4"
            />
          </div>
          {/* Submit Button */}
          <div className="grid max-w-sm items-center gap-1.5 my-1 justify-center text-center">
            <div className="flex flex-col gap-5 w-44 items-center justify-center">
              {loading ? (
                <button
                  type="button"
                  className="btn btn-primary w-full shadow-sm"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary w-full shadow-sm"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        {/* NB */}
        <div className="text-center">
          <h1 className="sm:text-base md:text-4xl">
            <span className="text-black font-bold">NB:</span>
            <span className="text-gray-600">
              The <span className="text-red-600">red circle</span> defines the
              required system.
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Signup;
