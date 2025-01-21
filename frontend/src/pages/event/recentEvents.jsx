import "bootstrap/dist/css/bootstrap.min.css";

const RecentEvents = () => {
  return (
    <div className="container-fluid my-0  bg-gradient-to-r from-blue-100 via-white-500 to-blue-500 p-5 rounded-lg shadow-lg">
      <h1 className="text-center mb-4 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
        RECENT EVENTS
      </h1>

      <div className="row align-items-stretch">
        {/* Right Part (YouTube Video) */}
        <div className="col-lg-5 mb-4 d-flex">
          <div className="ratio ratio-16x9 mb-3 rounded shadow-sm w-100 h-100">
            <iframe
              src="https://www.youtube.com/embed/AjDWNr10hn0?si=AAKcrkZV4nZXZc9T&autoplay=1&mute=1&loop=1&playlist=AjDWNr10hn0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        </div>

        {/* Left Part (Banner Image) */}
        <div className="col-lg-7 d-flex flex-column">
          <img
            src="src/assets/images/upcoming.jpg"
            alt="Recent Event Banner"
            className="img-fluid w-100 rounded shadow-sm mb-3 h-100"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center mt-3 flex-wrap">
        <a
          href="https://www.facebook.com"
          className="btn btn-primary me-3 mb-2 text-sm md:text-base lg:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook_Link
        </a>
        <a
          href="gallery.html"
          className="btn btn-secondary me-3 mb-2 text-sm md:text-base lg:text-lg"
        >
          Event_Gallery
        </a>
        <a
          href="#"
          className="btn btn-success me-3 mb-2 text-sm md:text-base lg:text-lg"
        >
          Details
        </a>
        <a
          href="#"
          className="btn btn-info me-3 mb-2 text-sm md:text-base lg:text-lg"
        >
          More_Events
        </a>
      </div>
    </div>
  );
};

export default RecentEvents;
