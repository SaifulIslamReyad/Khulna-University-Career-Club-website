import Program2 from "./programDown";
import Program from "./programUp";
import Im from "./im";
import Calendar from "./calender";
const Event = () => {
  return (
    <>
      <Im/>
      <Calendar/>
      <Program />
      <h1 className="text-center mb-5 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
        RECENT EVENTS
      </h1>
      <Program2 />
      <Program2 />
      <Program2 />
      <Program2 />
    </>
  );
};
export default Event;
