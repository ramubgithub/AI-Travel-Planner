const express = require("express");

const tripController = require(
  "../controllers/trip.controller"
);

const authMiddleware = require(
  "../middlewares/auth.middleware"
);

const router = express.Router();

router.post(
  "/generate",
  authMiddleware,
  tripController.createTrip
);

router.get(
  "/my-trips",
  authMiddleware,
  tripController.getTrips
);

router.get(
  "/:id",
  authMiddleware,
  tripController.getTrip
);

router.delete(
  "/:id",
  authMiddleware,
  tripController.deleteTrip
);

router.patch(
  "/:id/regenerate-day",
  authMiddleware,
  tripController.regenerateDay
);

module.exports = router;