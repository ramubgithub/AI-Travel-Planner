class HotelService {
  suggestHotels(
    destination,
    budgetType
  ) {
    const hotels = {
      Low: [
        {
          name:
            `${destination} Budget Inn`,
          category: "Budget",
          rating: 4.1
        },
        {
          name:
            `${destination} Backpackers`,
          category: "Budget",
          rating: 4.0
        }
      ],

      Medium: [
        {
          name:
            `${destination} Grand Hotel`,
          category: "Mid Range",
          rating: 4.4
        },
        {
          name:
            `${destination} City Stay`,
          category: "Mid Range",
          rating: 4.3
        }
      ],

      High: [
        {
          name:
            `${destination} Imperial Palace`,
          category: "Luxury",
          rating: 4.9
        },
        {
          name:
            `${destination} Royal Suites`,
          category: "Luxury",
          rating: 4.8
        }
      ]
    };

    return hotels[budgetType];
  }
}

module.exports =
  new HotelService();