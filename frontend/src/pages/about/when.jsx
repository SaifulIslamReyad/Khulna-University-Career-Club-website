const When = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-200 via-white to-orange-200 p-10 rounded-lg shadow-lg my-5">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6 md:text-4xl lg:text-5xl">
        When Did the Journey Begin?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 md:text-xl md:leading-loose">
        The{" "}
        <span className="font-semibold text-orange-800">
          Khulna University Career Club
        </span>{" "}
        was founded in <span className="font-bold">2024</span> by{" "}
        <span className="font-bold">Saif Bappi</span>, a visionary leader
        dedicated to fostering career development among students. Since its
        inception, the club has grown into a vibrant community of learners,
        achievers, and mentors.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Founding Story */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            Founding Story
          </h3>
          <p className="text-gray-700">
            The club began with a mission to bridge the gap between academic
            learning and professional skills. Saif Reyad, with a small team of
            dedicated students, laid the foundation for what would become a
            cornerstone of career readiness at Khulna University.
          </p>
        </div>

        {/* Key Milestones */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            Key Milestones
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>First career fair organized in 2024.</li>
            <li>Collaborations with leading companies for internships.</li>
            <li>Awarded Best Student Initiative in 2024.</li>
            <li>Reached a milestone of 1,000 members in 2024.</li>
          </ul>
        </div>

        {/* Collaborations */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            Collaborations & Growth
          </h3>
          <p className="text-gray-700">
            The club has partnered with top organizations and professionals to
            provide workshops, networking opportunities, and job resources.
            These collaborations have expanded the club&apos;s reach and impact.
          </p>
        </div>

        {/* Achievements */}
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            Achievements
          </h3>
          <p className="text-gray-700">
            From hosting annual career expos to securing scholarships and job
            placements for members, the club continues to achieve remarkable
            milestones that inspire the next generation.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Our journey is a testament to the power of determination and
          collaboration. Join us as we continue to shape the future of Khulna
          University&apos;s brightest minds!
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
        >
          Explore Our History
        </a>
      </div>
    </div>
  );
};

export default When;
