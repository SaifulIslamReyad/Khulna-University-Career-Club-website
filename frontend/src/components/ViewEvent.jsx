const ViewEvent = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] from-0% to-[#0c80b2] to-100% w-full h-full">
      <div className="p-20 flex flex-col items-center justify-center gap-5 border shadow-lg">
        <img
          src="src/assets/images/upcoming.jpg"
          className="w-48 sm:w-72 md:w-96 h-32 sm:h-48 md:h-72 object-cover p-2"
        />
        {/* Article section */}
        <section className="flex justify-between items-center w-3/4">
          <article className="flex flex-col gap-2 items-center sm:items-start justify-start p-2 text-white">
            <h2 className="text-xl sm:text-2xl md:2xl font-light">
              Description:
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950 ">
              Title
            </h1>
            <div className="text-sm sm:text-xl md:text-xl">
              About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat soluta aut assumenda dolores minima cupiditate, dolorum
              maiores ipsam, praesentium unde doloremque et? Nulla
            </div>
            <div className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950">
              Time:
            </div>
            <div className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-950">
              Venue:
            </div>
          </article>
          {/* link section */}
          <section className="flex flex-col gap-2 items-center text-center justify-center p-2 text-white">
            <h1 className="text-3xl">Learn More from Facebook</h1>
            <a
              href="https://www.facebook.com/media/set/?set=a.403236948471128&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-3xl"
            >
              <i
                style={{ color: "#4267B2" }}
                className="fab fa-facebook fa-2x"
              ></i>
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};
export default ViewEvent;
