 
// import SearchIcon from "./SearchIcon"; // Import the SVG icon for search
 
import { Container } from "../Container";
import { SearchForm } from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";
 

import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { EventList } from "../EventList";
import { eventsData } from "../../data"; // Import events data from your file

const MainPage = () => {
  // Fetch events from Local Storage or use eventsData from your file if Local Storage is empty
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    if (storedEvents.length === 0) {
      // If Local Storage is empty, use eventsData from your file
      setEvents(eventsData);
    } else {
      setEvents(storedEvents);
    }
  }, []);
  return (
    <Container>
      <Header />
      <h1>Event Planner</h1>
      <Link to="/create-event">+++Create Event</Link>
      <SearchForm />
      <EventList events={events} />
    </Container>
  );
};

export default MainPage;
