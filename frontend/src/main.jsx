import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/global.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/navbar.css";
import "./styles/dashboard.css";
import "./styles/tripplanner.css";
import "./styles/tripform.css";
import "./styles/itinerarycard.css";
import "./styles/budgetcard.css";
import "./styles/hotelcard.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);