import LoginHeader from "./LoginHeader";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <>
      <div>
        <LoginHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-full p-5">
          {/* Name */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="name" className="text-gray-600 px-1">
              Name:{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
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
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>
          {/* Home Town */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="homeTown" className="text-gray-600 px-1">
              Home Town :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="homeTown"
                placeholder="Enter your home town"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Student Id */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="studentId" className="text-gray-600 px-1">
              Student ID :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="studentId"
                placeholder="Enter your student id"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* password */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="email" className="text-gray-600 px-1">
              Password :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Moblie No */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="moblieNo" className="text-gray-600 px-1">
              Mobile No :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="mobileNo"
                placeholder="Enter your mobile no"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Discipline */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="discipline" className="text-gray-600 px-1">
              Discipline :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="text"
                id="discipline"
                placeholder="Enter your discipline"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="grid  max-w-sm items-center gap-1.5 my-1 shadow-sm">
            <label htmlFor="confirmPassword" className="text-gray-600 px-1">
              Confirm Password :{" "}
            </label>
            <div className="relative w-full ">
              <input
                type="password"
                id="confirmPassword"
                placeholder="********"
                className="w-full h-10 outline-gray-300 rounded-none bg-gray-50 p-1 px-4"
              />
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
          <div className="grid max-w-sm items-center gap-1.5 my-1 justify-center">
            <div className="flex flex-col gap-5 w-44 items-center justify-center">
              <button type="button" className="btn btn-light w-full shadow-sm">
                Drop your Cv
              </button>
              <button
                type="button"
                className="btn btn-primary w-full shadow-sm"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
