import Member from "./Member";

const Members = () => {
  return (
    <div className="bg-gradient-to-tr from-[#87d6e6] from-0% to-[#063bb7] to-100% w-full h-full py-10">
      {/* Title Section */}
      <section className="flex flex-col items-center justify-center text-center mx-auto py-5 px-10 sm:px-20 md:px-32">
        <article
          className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-semibold lg:font-bold text-white space-x-1 tracking-wide"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          A dynamic group of individuals coming together to connect, learn, and
          grow within the club
        </article>
      </section>
      {/* Section Exexutive members */}
      <section className="bg-gradient-to-tr from-[#2f9fa0] from-0% to-[#e5e7eb] to-100% w-4/5 h-full mx-auto my-10 shadow-2xl rounded-2xl px-10">
        <div className="w-full h-full flex flex-col items-center justify-center pt-10">
          <h1
            className="text-center py-2 my-8 text-xl sm:text-2xl lg:text-4xl underline-offset-4 border-b border-b-gray-950"
            style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5)" }}
          >
            Executive Members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-10 sm:pb-20 justify-center justify-items-center">
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </section>
    </div>
  );
};
export default Members;
