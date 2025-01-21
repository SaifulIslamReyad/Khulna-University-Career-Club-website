const Why = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-white to-orange-200 p-10 rounded-lg shadow-lg my-5">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6 md:text-4xl lg:text-5xl">
        Why Join the Career Club?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed md:text-xl md:leading-loose">
        Being part of the{" "}
        <span className="font-semibold text-orange-800">
          Khulna University Career Club
        </span>{" "}
        opens doors to a world of opportunities that can transform your career
        journey. Here are some of the benefits of joining the club:
      </p>
      <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-3 md:text-xl md:space-y-4">
        <li>
          <span className="font-semibold text-orange-800">
            Networking Opportunities:
          </span>{" "}
          Connect with industry leaders, professionals, and alumni to build
          meaningful relationships that can guide and support your career.
        </li>
        <li>
          <span className="font-semibold text-orange-800">
            Workshops and Seminars:
          </span>{" "}
          Gain practical skills and knowledge through events designed to prepare
          you for the job market.
        </li>
        <li>
          <span className="font-semibold text-orange-800">
            Mentorship Programs:
          </span>{" "}
          Receive guidance and insights from experienced mentors who are
          committed to helping you succeed.
        </li>
        <li>
          <span className="font-semibold text-orange-800">
            Access to Job Resources:
          </span>{" "}
          Stay updated with the latest job openings, internships, and career
          fairs exclusively available to club members.
        </li>
      </ul>
      <div className="mt-6 p-5 bg-white rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-orange-700 mb-3">
          Real Stories, Real Impact
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Joining the Career Club was a turning point in my life. Through their
          mentorship and workshops, I secured an internship at a leading tech
          company and gained invaluable confidence in my abilities. –
          <span className="font-semibold text-orange-800">
            {" "}
            Saif Reyad, Club Member
          </span>
        </p>
        <p className="text-gray-700 leading-relaxed">
          Becoming a member of the Career Club marked a transformative moment in
          my life. The mentorship I received, combined with the insightful
          workshops, paved the way for me to secure an internship at a leading
          tech company. This experience not only enhanced my skills but also
          instilled a profound sense of confidence in my abilities. –
          <span className="font-semibold text-orange-800">
            {" "}
            Tajbid Hossain, Club Member
          </span>
        </p>
      </div>
    </div>
  );
};

export default Why;
