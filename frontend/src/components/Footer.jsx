import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row text-center text-lg-start">
          {/* About KUCC Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h4 className="mb-3">About KUCC</h4>
            <p>
              Khulna University Computer Club (KUCC) is dedicated to promoting
              technology and programming among students. Our goal is to nurture
              talent and create opportunities for future IT leaders.
            </p>
            <p>
              <strong>Vision:</strong> To be a leading platform for students to
              enhance their technical skills and connect with the global tech
              community.
            </p>
          </div>

          {/* Contact KUCC Section */}
          <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h4 className="mb-4 text-center">Contact KUCC</h4>
            <div className="text-center mb-5">
              <div className="d-flex justify-content-center mb-3">
                <a
                  href="https://www.facebook.com/media/set/?set=a.403236948471128&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  <i style={{ color: "#4267B2" }} className="fab fa-facebook fa-2x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/kuccofficial/?originalSubdomain=bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  <i style={{ color: "#0077B5" }} className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  <i style={{ color: "#0084FF" }} className="fab fa-facebook-messenger fa-2x"></i>
                </a>
              </div>
              <p className="mb-3 text-start">
                <a href="tel:+8801772977405" style={{ color: "green" }}>
                  <i className="fas fa-phone fa-lg me-2"></i>
                </a>
                +8801772977405
              </p>
              <p className="mb-3 text-start">
                <a href="mailto:riyadsaif@gmail.com">
                  <i style={{ color: "#D14836" }} className="fas fa-envelope fa-lg me-2"></i>
                </a>
                riyadsaif@gmail.com
              </p>
              <p className="mb-3 text-start">
                <a
                  href="https://www.google.com/maps?q=Khulna+University"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i style={{ color: "red" }} className="fas fa-map-marker-alt fa-lg me-2"></i>
                </a>
                Cafeteria, Khulna University
              </p>
              <p className="mb-3 text-start">
                <a
                  href="https://wa.me/yourwhatsapplink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i style={{ color: "#25D366" }} className="fab fa-whatsapp fa-lg me-2"></i>
                </a>
                WhatsApp
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="mb-3">Find Us on Map</h4>
            <div className="ratio ratio-16x9">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.062963591716!2d89.5302865!3d22.8028583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff85895678c803%3A0x9149aebba37651e9!2sCAFETERIA%2C%20Khulna%20University!5e0!3m2!1sen!2sbd!4v1694392318962!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
