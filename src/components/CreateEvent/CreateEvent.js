import React, { useState, useEffect } from "react";
import { BackButton } from "../BackButton";
import { eventsData } from "../../data";

export const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "Art",
    picture: "",
    priority: "medium",
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from local storage on component mount
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    if (storedEvents.length === 0) {
      // If local storage is empty, use the artificially stored eventsData
      setEvents(eventsData);
    } else {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    // Save events to local storage whenever events state changes
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateEvent = () => {
    const newEvent = {
      id: Date.now(),
      ...eventData,
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setEventData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "Art",
      picture: "",
      priority: "medium",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateEvent();
  };

  return (
    <div>
      <BackButton />
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={eventData.category}
            onChange={handleChange}
          >
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Party">Party</option>
            <option value="Sport">Sport</option>
          </select>
        </label>

        <label>
          Add Picture:
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <label>
          Priority:
          <select
            name="priority"
            value={eventData.priority}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};
