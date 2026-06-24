import "../styles/itinerarycard.css";

function ItineraryCard({ trip }) {
  let itinerary;

  try {
    itinerary =
      typeof trip.itinerary === "string"
        ? JSON.parse(trip.itinerary)
        : trip.itinerary;
  } catch (error) {
    itinerary = null;
  }

  return (
    <div className="trip-card">
      <div className="trip-header">
        <h2>{trip.destination}</h2>

        <span className="trip-badge">
          AI Generated Trip
        </span>
      </div>

      <div className="trip-info">
        <div className="info-box">
          <p>Duration</p>
          <h4>{trip.days} Days</h4>
        </div>

        <div className="info-box">
          <p>Budget Type</p>
          <h4>{trip.budgetType}</h4>
        </div>
      </div>

      <div className="itinerary-section">
        {itinerary?.days?.map((day) => (
          <div
            key={day.day}
            className="day-card"
          >
            <h3>Day {day.day}</h3>

            <ul>
              {day.activities.map(
                (activity, index) => (
                  <li key={index}>
                    {activity}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItineraryCard;
