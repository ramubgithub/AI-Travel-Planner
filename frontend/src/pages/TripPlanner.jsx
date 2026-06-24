import Navbar from "../components/Navbar";
import TripForm from "../components/TripForm";
import "../styles/tripplanner.css";

function TripPlanner() {
  return (
    <div className="trip-planner-page">

      <Navbar />

      <div className="trip-planner-container">

        <div className="trip-header">
          <h1>AI Travel Planner</h1>

          <p>
            Create personalized travel itineraries,
            estimate budgets, discover hotels,
            and plan unforgettable journeys
            powered by AI.
          </p>
        </div>

        <div className="trip-form-section">

          <div className="trip-card">
            <TripForm />
          </div>

        </div>

      </div>

    </div>
  );
}

export default TripPlanner;
