const LoginHeader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span>
        <img
          src="src/assets/images/logo.jpg"
          className="w-24 h-24 rounded-full shadow-sm"
        />
      </span>
      <div className="flex flex-col text-[#2193d0] font-bold text-4xl gap-2 items-center justify-center">
        <span>Khulna University</span>
        <span>Career Club</span>
      </div>
    </div>
  );
};
export default LoginHeader;
