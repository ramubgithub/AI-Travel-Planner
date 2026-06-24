import "../styles/hotelcard.css";
function HotelCard({ hotels }) {
  if (!hotels || hotels.length === 0) return null;

  return (
    <div className="hotel-card">

      <h2 className="hotel-card-title">
        Recommended Hotels
      </h2>

      <div className="hotels-container">

        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="hotel-item"
          >
            <h4 className="hotel-name">
              {hotel.name}
            </h4>

            <p className="hotel-detail">
              <span>Category:</span>{" "}
              {hotel.category}
            </p>

            <p className="hotel-detail">
              <span>Rating:</span>{" "}
              ⭐ {hotel.rating}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default HotelCard;
