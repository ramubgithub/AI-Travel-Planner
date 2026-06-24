import { useState } from "react";
import api from "../services/api";

import BudgetCard from "./BudgetCard";
import HotelCard from "./HotelCard";

import "../styles/tripform.css";

function TripForm() {
  const [trip, setTrip] =
    useState(null);

  const [form, setForm] =
    useState({
      destination: "",
      days: 3,
      budgetType: "Medium",
      interests: ""
    });

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        const response =
          await api.post(
            "/trips/generate",
            {
              ...form,
              interests:
                form.interests
                  .split(",")
                  .map((item) =>
                    item.trim()
                  )
            }
          );

        setTrip(
          response.data.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <form
        className="trip-form"
        onSubmit={handleSubmit}
      >
        <h2 className="trip-form-title">
          Plan Your Dream Trip
        </h2>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Destination
            </label>

            <input
              type="text"
              placeholder="Tokyo, Japan"
              value={form.destination}
              onChange={(e) =>
                setForm({
                  ...form,
                  destination:
                    e.target.value
                })
              }
            />
          </div>

          <div className="form-group">
            <label>
              Number of Days
            </label>

            <input
              type="number"
              min="1"
              value={form.days}
              onChange={(e) =>
                setForm({
                  ...form,
                  days:
                    e.target.value
                })
              }
            />
          </div>

        </div>

        <div className="form-group">
          <label>
            Budget Type
          </label>

          <select
            value={form.budgetType}
            onChange={(e) =>
              setForm({
                ...form,
                budgetType:
                  e.target.value
              })
            }
          >
            <option>
              Low
            </option>

            <option>
              Medium
            </option>

            <option>
              High
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Interests
          </label>

          <input
            className="interests-input"
            placeholder="Food, Culture, Adventure, Shopping"
            value={form.interests}
            onChange={(e) =>
              setForm({
                ...form,
                interests:
                  e.target.value
              })
            }
          />
        </div>

        <button
          type="submit"
          className="generate-btn"
        >
          Generate AI Trip
        </button>

      </form>

      {trip && (
        <>
          <BudgetCard
            budget={
              trip.estimatedBudget
            }
          />

          <HotelCard
            hotels={
              trip.hotels
            }
          />
        </>
      )}
    </>
  );
}

export default TripForm;
