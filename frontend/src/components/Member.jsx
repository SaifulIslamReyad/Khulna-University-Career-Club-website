const Member = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src="src/assets/images/member1.jpg"
        className="w-20 sm:w-48 lg:w-72 h-20 sm:h-48 lg:h-72 shadow-sm rounded-full object-contain"
      />
      <h1
        className="  text-xl sm:text-2xl lg:text-3xl "
        style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5)" }}
      >
        President
      </h1>
    </div>
  );
};
export default Member;
