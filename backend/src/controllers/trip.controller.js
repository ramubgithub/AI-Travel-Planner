const tripRepository = require(
  "../repositories/trip.repository"
);

const aiService = require(
  "../services/ai.service"
);

const budgetService = require(
  "../services/budget.service"
);

const hotelService = require(
  "../services/hotel.service"
);

const {
  successResponse,
  errorResponse
} = require("../utils/apiResponse");

class TripController {
  async createTrip(req, res) {
    try {
      const {
        destination,
        days,
        budgetType,
        interests
      } = req.body;

      const itinerary =
        await aiService.generateItinerary({
          destination,
          days,
          budgetType,
          interests
        });

      const estimatedBudget =
        budgetService.estimateBudget(
          destination,
          days,
          budgetType
        );

      const hotels =
        hotelService.suggestHotels(
          destination,
          budgetType
        );

      const trip =
        await tripRepository.createTrip({
          user: req.user.id,
          destination,
          days,
          budgetType,
          interests,
          itinerary,
          estimatedBudget,
          hotels
        });

      return successResponse(
        res,
        "Trip Generated Successfully",
        trip,
        201
      );
    } catch (error) {
  console.error("CREATE TRIP ERROR:");
  console.error(error);

  return errorResponse(
    res,
    error.message || "Internal Server Error"
  );
}
  }

  async getTrips(req, res) {
    try {
      const trips =
        await tripRepository.getTripsByUser(
          req.user.id
        );

      return successResponse(
        res,
        "Trips Fetched",
        trips
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  }

  async getTrip(req, res) {
    try {
      const trip =
        await tripRepository.getTripById(
          req.params.id
        );

      if (!trip) {
        return errorResponse(
          res,
          "Trip Not Found",
          404
        );
      }

      if (
        trip.user.toString() !==
        req.user.id
      ) {
        return errorResponse(
          res,
          "Unauthorized",
          403
        );
      }

      return successResponse(
        res,
        "Trip Details",
        trip
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  }

  async deleteTrip(req, res) {
    try {
      const trip =
        await tripRepository.getTripById(
          req.params.id
        );

      if (!trip) {
        return errorResponse(
          res,
          "Trip Not Found",
          404
        );
      }

      if (
        trip.user.toString() !==
        req.user.id
      ) {
        return errorResponse(
          res,
          "Unauthorized",
          403
        );
      }

      await tripRepository.deleteTrip(
        req.params.id
      );

      return successResponse(
        res,
        "Trip Deleted"
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  }

  async regenerateDay(req, res) {
    try {
      const {
        dayNumber
      } = req.body;

      const trip =
        await tripRepository.getTripById(
          req.params.id
        );

      if (!trip) {
        return errorResponse(
          res,
          "Trip Not Found",
          404
        );
      }

      const regeneratedDay =
        await aiService.regenerateDay(
          trip.destination,
          trip.interests,
          dayNumber
        );

      return successResponse(
        res,
        "Day Regenerated",
        regeneratedDay
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  }
}

module.exports =
  new TripController();