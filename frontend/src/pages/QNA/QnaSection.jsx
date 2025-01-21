import AccordionSection from "@/components/AccordionSection";
import { FaWhatsappSquare } from "react-icons/fa";
const QnaSection = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] from-0% to-[#0c80b2] to-100% w-full h-full">
      {/* Heading Section */}

      <section className=" flex flex-col items-center justify-center p-20">
        <h1
          className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Find answers to common questions about our club&apos;s features and
          accessibility.
        </h1>
      </section>
      {/* Accordion Section */}
      <section className="flex flex-col justify-center items-center w-2/3 mx-auto ">
        <div>
          <h1
            className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-950 text-center"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            General Question&apos;s are:{" "}
          </h1>
          <span>
            <hr className="mt-1 w-30 h-1 bg-gray-950 rounded-sm shadow-sm" />
          </span>
        </div>
        <AccordionSection />
      </section>
      {/* Creator and helper section */}
      <section className="flex flex-col justify-center items-center gap-1 py-5">
        <h1
          className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Here&apos;s the member&apos;s for instant contact:
        </h1>
        <section className="py-5 flex justify-around items-center flex-wrap w-1/2 gap-10 mx-auto">
          <div className="border flex flex-col justify-center items-center gap-2 shadow-lg py-10">
            <div>
              <img
                src="src/assets/images/tajbid.jpeg"
                className="w-32 md:w-48 lg:w-72 h-32 md:h-48 lg:h-72 shadow-sm rounded-full object-cover object-top border"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <h1
                className="text-xl sm:text-2xl md:3xl text-gray-950 shadow-sm text-center"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                Tajbid Hossain Bappi
              </h1>
              <div className="flex flex-row justify-center items-center gap-2 text-white">
                <FaWhatsappSquare className="w-8 h-8" />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
          <div className="border flex flex-col justify-center items-center gap-2 shadow-lg py-10">
            <div>
              <img
                src="src/assets/images/mahin.JPG"
                className="w-32 md:w-48 lg:w-72 h-32 md:h-48 lg:h-72 shadow-sm rounded-full object-cover object-top border"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <h1
                className="text-xl sm:text-2xl md:3xl text-gray-950 shadow-sm text-center"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                Md Abdullah Al Mahin
              </h1>
              <div className="flex flex-row justify-center items-center gap-2 text-white">
                <FaWhatsappSquare className="w-8 h-8" />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
          <div className="border flex flex-col justify-center items-center gap-2 shadow-lg py-10">
            <div>
              <img
                src="src/assets/images/reyad.jpg"
                className="w-32 md:w-48 lg:w-72 h-32 md:h-48 lg:h-72 shadow-sm rounded-full object-cover object-top border"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <h1
                className="text-xl sm:text-2xl md:3xl text-gray-950 shadow-sm text-center"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                Saiful Islam Reyad
              </h1>
              <div className="flex flex-row justify-center items-center gap-2 text-white">
                <FaWhatsappSquare className="w-8 h-8" />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default QnaSection;
