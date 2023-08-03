import React from "react";

export const EventList = ({ events }) => {
  return (
    <div>
      {events.length > 0 ? (
        <div>
          <h2>Events Created:</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.title}</strong> - {event.date} {event.time} (
                {event.location})<p>{event.description}</p>
                <p>Category: {event.category}</p>
                <p>Priority: {event.priority}</p>
                {/* Display the image if available */}
                {event.picture && <img src={event.picture} alt="Event" />}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No events created yet.</p>
      )}
    </div>
  );
};
