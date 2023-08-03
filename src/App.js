import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
// import CreateEventPage from "./pages/CreateEventPage";
import Event from "./pages/EventPage.js";
import CreateEventPage from "./pages/CreateEventPage";
 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/event/:eventId" element={<Event />} />
          {/* Add the route for EditEvent if using the optional page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
