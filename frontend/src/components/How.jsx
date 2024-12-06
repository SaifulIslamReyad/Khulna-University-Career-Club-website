import React from "react";

const How = () => {
  return (
    <div className="bg-gradient-to-br from-green-200 via-white to-teal-200 p-10 rounded-lg shadow-lg my-5">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6 md:text-4xl lg:text-5xl">
        How Does the Career Club Work?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 md:text-xl md:leading-loose">
        The <span className="font-semibold text-teal-800">Khulna University Career Club</span> operates as a vibrant platform that empowers students through structured activities, programs, and resources tailored to boost their career readiness.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Events and Seminars */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Events & Seminars
          </h3>
          <p className="text-gray-700">
            Regular events and seminars featuring industry leaders, alumni, and career experts. These sessions provide insights into various industries, career paths, and skill-building opportunities.
          </p>
        </div>

        {/* Mentorship Programs */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Mentorship Programs
          </h3>
          <p className="text-gray-700">
            Personalized guidance from experienced mentors who help students navigate their career journey, explore new possibilities, and overcome challenges.
          </p>
        </div>

        {/* Workshops */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Skill-Building Workshops
          </h3>
          <p className="text-gray-700">
            Hands-on workshops focusing on resume writing, interview preparation, communication skills, and more to prepare students for the job market.
          </p>
        </div>

        {/* Other Initiatives */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Other Initiatives
          </h3>
          <p className="text-gray-700">
            Career fairs, internship placements, and exclusive access to job portals to connect students with employment opportunities.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Join us and take the first step toward a brighter future. Explore the resources and programs designed just for you!
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default How;
