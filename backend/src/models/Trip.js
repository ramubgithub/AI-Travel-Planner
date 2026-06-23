const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    destination: {
      type: String,
      required: true
    },

    days: {
      type: Number,
      required: true
    },

    budgetType: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true
    },

    interests: [
      {
        type: String
      }
    ],

    itinerary: {
      type: Object,
      default: {}
    },

    estimatedBudget: {
      flights: Number,
      accommodation: Number,
      food: Number,
      activities: Number,
      total: Number
    },

    hotels: [
      {
        name: String,
        category: String,
        rating: Number
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Trip",
  tripSchema
);