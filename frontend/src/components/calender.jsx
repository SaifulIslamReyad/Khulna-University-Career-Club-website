const Calendar = () => {
  const events = [
    { date: "2024-12-01", eventName: "Event 1", eventPlace: "Location 1" },
    { date: "2024-12-05", eventName: "Event 2", eventPlace: "Location 2" },
    { date: "2024-12-10", eventName: "Event 3", eventPlace: "Location 3" },
    { date: "2024-12-15", eventName: "Event 4", eventPlace: "Location 4" },
    { date: "2024-12-20", eventName: "Event 5", eventPlace: "Location 5" },
  ];

  return (
    <div className="container my-5 px-16 py-0">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event Name</th>
            <th>Event Place</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>{event.eventName}</td>
              <td>{event.eventPlace}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
