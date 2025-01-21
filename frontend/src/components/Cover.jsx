import coverImage from "../assets/images/event.jpg";

const Cover = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        paddingTop: "24%",
        height: "0",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white-500 to-blue-500 text-l sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide shadow-lg animate-pulse whitespace-nowrap">
        Total 300+ events and counting......
      </div>
    </div>
  );
};

export default Cover;
