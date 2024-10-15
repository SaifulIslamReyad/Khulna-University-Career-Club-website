import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Upcoming Events</h1>

      <div className="row align-items-stretch">
        {/* Left Part (Banner Image) */}
        <div className="col-lg-7 mb-4 d-flex flex-column">
          <img
            src="src/assets/images/upcoming.jpg"
            alt="Event Banner"
            className="img-fluid w-100 rounded shadow-sm mb-3"
          />
        </div>

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
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center mt-3">
        <a
          href="https://www.facebook.com"
          className="btn btn-outline-primary me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find on Facebook
        </a>
        <a href="#" className="btn btn-outline-secondary me-3">
          View Details
        </a>
        <a href="#" className="btn btn-outline-success me-3">
          Register for This Event
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
