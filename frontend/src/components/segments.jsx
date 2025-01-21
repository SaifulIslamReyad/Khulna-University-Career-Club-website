const Segments = () => {
  return (
    <div className="container mx-auto px-4 py-8  bg-gradient-to-br from-blue-900 via-white-500 to-blue-100 p-5 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Segments</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Segment 1: Language */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="./src/assets/images/language.jpeg"
            alt="Language"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h5 className="text-xl font-semibold mb-2">Language</h5>
            <p className="text-gray-600">
              Explore language-related skills and resources.
            </p>
          </div>
        </div>

        {/* Segment 2: IT */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="./src/assets/images/it.jpeg"
            alt="IT"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h5 className="text-xl font-semibold mb-2">IT</h5>
            <p className="text-gray-600">
              Discover information technology and programming tools.
            </p>
          </div>
        </div>

        {/* Segment 3: Scholar */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="./src/assets/images/scholar.jpeg"
            alt="Scholar"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h5 className="text-xl font-semibold mb-2">Scholar</h5>
            <p className="text-gray-600">
              Learn about scholarships and academic resources.
            </p>
          </div>
        </div>

        {/* Segment 4: Govern */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="./src/assets/images/govern.jpeg"
            alt="Govern"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h5 className="text-xl font-semibold mb-2">Govern</h5>
            <p className="text-gray-600">
              Find information on government exams and policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
