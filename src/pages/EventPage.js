import React from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();

  return (
    <div>
      <h1>Event Page</h1>
      <p>Event ID: {eventId}</p>
      {/* Add content for the specific event page */}
    </div>
  );
};

export default Event;
