const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require(
  "./routes/auth.routes"
);

const tripRoutes = require(
  "./routes/trip.routes"
);

const limiter = require(
  "./middlewares/rateLimiter.middleware"
);

const errorMiddleware = require(
  "./middlewares/error.middleware"
);

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "AI Travel Planner API Running"
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/trips",
  tripRoutes
);

app.use(errorMiddleware);

module.exports = app;