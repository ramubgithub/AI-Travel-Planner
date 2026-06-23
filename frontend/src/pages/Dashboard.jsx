import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import ItineraryCard from "../components/ItineraryCard";

import "../styles/dashboard.css";

function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await api.get(
        "/trips/my-trips"
      );

      setTrips(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-page">

        <div className="dashboard-header">
          <h1>My Trips</h1>

          <p>
            Manage all your AI generated travel plans
          </p>
        </div>

        <div className="trip-grid">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <div
                className="trip-item"
                key={trip._id}
              >
                <ItineraryCard
                  trip={trip}
                />
              </div>
            ))
          ) : (
            <div className="empty-state">
              No Trips Found
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Dashboard;