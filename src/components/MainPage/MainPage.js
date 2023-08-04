// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { LanguageButton } from "../LanguageButton";
import { EventList } from "../EventList";
import { eventsData } from "../../data"; // Import events data from your file
import { Container } from "../Container";
import { Link } from "react-router-dom";
import { SearchForm } from "../SearchForm/SearchForm";
import { FilterButton } from "../FilterButton";
import { SortButton } from "../SortButton";
import { StyledH1, FlexContainer } from "./MainPage.styled";
 

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

  // Function to filter events by category
  const handleFilter = (category) => {
    if (category === "") {
      // If the category is empty, show all events
      setEvents(eventsData);
    } else {
      // Filter events based on the selected category
      const filteredEvents = eventsData.filter(
        (event) => event.category === category
      );
      setEvents(filteredEvents);
    }
  };
  // Function to sort events
  const handleSort = (sortBy) => {
    switch (sortBy) {
      case "nameAscending":
        setEvents([...events].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "nameDescending":
        setEvents([...events].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case "dateAscending":
        setEvents(
          [...events].sort((a, b) => new Date(a.date) - new Date(b.date))
        );
        break;
      case "dateDescending":
        setEvents(
          [...events].sort((a, b) => new Date(b.date) - new Date(a.date))
        );
        break;
      case "priorityAscending":
        setEvents(
          [...events].sort((a, b) => a.priority.localeCompare(b.priority))
        );
        break;
      case "priorityDescending":
        setEvents(
          [...events].sort((a, b) => b.priority.localeCompare(a.priority))
        );
        break;
      default:
        break;
    }
  };
  // Get unique categories from eventsData to use in the FilterButton
  const categories = [...new Set(eventsData.map((event) => event.category))];

  return (
    <Container>
      <FlexContainer>
        <StyledH1>Event Planner</StyledH1>
        <LanguageButton />
      </FlexContainer>
      <Link to="/create-event">+++Create Event</Link>
      <SearchForm />
      <SortButton onSort={handleSort} />
      <FilterButton categories={categories} onFilter={handleFilter} />
      <EventList events={events} />
    </Container>
  );
};

export default MainPage;
