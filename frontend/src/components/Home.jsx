import UpcomingEvents from "../pages/event/upcomingEvents.jsx";
import RecentEvents from "../pages/event/recentEvents.jsx";
import Segments from "./Segments.jsx";
import DynamicContent from "./DynamicContent.jsx";

const Home = () => {
  return (
    <>
      <DynamicContent />
      <UpcomingEvents />
      <RecentEvents />
      <Segments />
    </>
  );
};
export default Home;
