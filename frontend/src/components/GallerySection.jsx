import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for modal
  const images = [
    "src/assets/images/member1.jpg",
    "src/assets/images/member2.jpg",
    "src/assets/images/member3.jpg",
    "src/assets/images/member4.jpg",
    "src/assets/images/member1.jpg",
    "src/assets/images/member2.jpg",
  ];

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-tr from-[#87d6e6] from-0% to-[#063bb7] to-100% w-full h-full py-10">
      <section className="flex flex-col items-center justify-center text-center mx-auto py-5 px-10 sm:px-20 md:px-32">
        <article
          className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-semibold lg:font-bold text-white space-x-1 tracking-wide"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          A Visually Organized Collection for Easy Image Browsing
        </article>
      </section>

      {/* Gallery Images */}
      <section className="bg-gradient-to-tr from-[#2f9fa0] from-0% to-[#e5e7eb] to-100% w-4/5 h-full mx-auto my-10 shadow-2xl rounded-2xl px-10">
        <div className="w-full h-full flex flex-col items-center justify-center pt-5">
          <h1
            className="text-center py-2 my-5 text-xl sm:text-2xl lg:text-4xl underline-offset-4 border-b border-b-gray-950"
            style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5)" }}
          >
            Gallery
          </h1>
        </div>

        <section className="grid grid-cols-3 gap-5 pb-10 sm:pb-20 justify-center justify-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className=" group relative w-40 sm:w-48 lg:w-72 h-40 sm:h-48 lg:h-72 cursor-pointer"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-contain shadow-sm transition-opacity duration-300 group-hover:opacity-75"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </section>
      </section>

      {/* Modal for Viewing Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 text-center w-10 h-10 text-white rounded shadow"
            >
              <IoIosCloseCircle size={32} />
            </button>
            <a
              href={selectedImage}
              download={`${selectedImage}.jpg`}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-10 px-4 py-2 text-center bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
