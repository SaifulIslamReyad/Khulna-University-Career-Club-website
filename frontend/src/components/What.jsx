const What = () => {
    return (
      <div className="bg-gradient-to-r from-green-100 via-white to-green-200 p-10 rounded-lg shadow-lg my-5">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6 md:text-4xl lg:text-5xl">
          What is the Khulna University Career Club?
        </h2>
  
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="src/assets/images/logo3d.jpg"
              alt="Career Club"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
  
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed md:text-xl md:leading-loose">
              The{" "}
              <span className="font-semibold text-green-800">
                Khulna University Career Club
              </span>{" "}
              is a student-driven organization aimed at empowering students with
              the knowledge, skills, and opportunities they need to excel in their
              careers. Our mission is to bridge the gap between academic learning
              and professional life, ensuring students are well-prepared for the
              challenges of the modern job market.
            </p>
  
            <p className="text-lg text-gray-700 mt-4 md:text-xl md:leading-loose">
              By organizing workshops, seminars, career counseling sessions, and
              networking events, the club provides a platform for students to
              discover their potential, build essential skills, and connect with
              industry professionals. Whether you're exploring your career options
              or taking the first steps toward your dream job, the{" "}
              <span className="font-semibold text-green-800">
                Khulna University Career Club
              </span>{" "}
              is your partner in growth and success.
            </p>
          </div>
        </div>
  
        {/* Decorative Divider */}
        <div className="mt-8">
          <hr className="border-t-4 border-green-300 rounded-full" />
        </div>
  
        {/* Call-to-Action Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4 md:text-xl">
            Ready to take the next step in your career journey?
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
          >
            Join Us Today
          </a>
        </div>
      </div>
    );
  };
  
  export default What;
  