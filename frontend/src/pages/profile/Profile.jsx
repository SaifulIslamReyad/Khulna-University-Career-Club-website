import { Button } from "../../components/ui/button";
import { IoMdDownload } from "react-icons/io";

const Profile = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#81c7de] from-0% to-[#4abced] to-100% relative">
        <button className="absolute right-5 top-10 bg-[#2193d0] border-none text-xs md:text-base md:w-40 w-20 h-5 md:h-10 rounded-md text-white cursor-pointer hover:bg-[#1a7fb3] z-10">
          Edit Profile
        </button>

        <div className="flex w-full h-[100vh] items-center flex-col relative">
          {/* Image and Name part */}
          <section className="flex flex-col items-center justify-center gap-4 p-4 md:p-8 ">
            <div>
              <img
                src="src/assets/images/tajbid.jpeg"
                className="w-16 md:w-32 lg:w-48 h-16 md:h-32 lg:h-48 shadow-sm rounded-full object-cover object-top"
              />
            </div>
            <h1
              className="text-4xl font-bold text-white text-center"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Tajbid Hossain Bappi
            </h1>
          </section>
          {/*student id: Discipline, mobile, Home , email */}
          <section className="flex flex-col justify-center items-center gap-4 sm:w-3/4 md:w-1/2 sm:text-sm md:text-base lg:text-lg text-center lg:font-medium sm:font-base">
            <div className="w-full bg-white h-12 flex items-center md:gap-5 sm:gap-2 md:pl-5 sm:pl-1 lg:pl-8 rounded-md shadow-lg justify-center md:justify-normal">
              <span className="lg:w-1/5 md:w-1/5 w-fit text-left">
                Student ID
              </span>
              <span>:</span>
              <span>230235</span>
            </div>
            <div className="w-full bg-white h-12 flex items-center md:gap-5 sm:gap-2 md:pl-5 sm:pl-1 lg:pl-8 rounded-md shadow-lg justify-center md:justify-normal">
              <span className="lg:w-1/5 md:w-1/5 w-fit text-left">
                Discipline
              </span>
              <span>:</span>
              <span>Computer Science and Engineering </span>
            </div>
            <div className="w-full bg-white h-12 flex items-center md:gap-5 sm:gap-2 md:pl-5 sm:pl-1 lg:pl-8 rounded-md shadow-lg justify-center md:justify-normal">
              <span className="lg:w-1/5 md:w-1/5 w-fit text-left">
                Mobile No
              </span>
              <span>:</span>
              <span>01738166031 </span>
            </div>
            <div className="w-full bg-white h-12 flex items-center md:gap-5 sm:gap-2 md:pl-5 sm:pl-1 lg:pl-8 rounded-md shadow-lg justify-center md:justify-normal">
              <span className="lg:w-1/5 md:w-1/5 w-fit text-left">Home</span>
              <span>:</span>
              <span>Chougaccha,Jashore,Khulna </span>
            </div>
            <div className="w-full bg-white h-12 flex items-center md:gap-5 sm:gap-2 md:pl-5 sm:pl-1 lg:pl-8 rounded-md shadow-lg justify-center md:justify-normal">
              <span className="lg:w-1/5 md:w-1/5 w-fit text-left">Email</span>
              <span>:</span>
              <span>tajbid902@gmail.com </span>
            </div>
          </section>
          {/* CV Download Button */}
          <section className="flex mt-5 ">
            <Button className="w-36 h-12 text-center">
              Download CV <IoMdDownload />{" "}
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};
export default Profile;
