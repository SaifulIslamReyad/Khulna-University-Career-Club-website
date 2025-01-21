import Calendar from "../../components/calender";
import Cover from "../../components/Cover";
import ProgramDown from "../../components/ProgramDown";
import ProgramUp from "../../components/ProgramUp";
const Events = () => {
  return (
    <>
      <Cover />
      <Calendar />
      <ProgramUp />
      <h1 className="text-center mb-5 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
        RECENT EVENTS
      </h1>
      <ProgramDown />
      <ProgramDown />
      <ProgramDown />
      <ProgramDown />
    </>
  );
};
export default Events;
