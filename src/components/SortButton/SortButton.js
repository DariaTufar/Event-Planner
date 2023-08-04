import React, { useState } from "react";

export const SortButton = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSortClick = () => {
    onSort(selectedOption);
  };

  return (
    <div>
      <h2>Sort Events:</h2>
      <div>
        <button onClick={handleSortClick}>Sort</button>
        <select value={selectedOption} onChange={handleSortChange}>
          <option value="">Select an option</option>
          <option value="nameAscending">Sort by Name (Ascending)</option>
          <option value="nameDescending">Sort by Name (Descending)</option>
          <option value="dateAscending">Sort by Date (Ascending)</option>
          <option value="dateDescending">Sort by Date (Descending)</option>
          <option value="priorityAscending">
            Sort by Priority (Ascending)
          </option>
          <option value="priorityDescending">
            Sort by Priority (Descending)
          </option>
        </select>
      </div>
    </div>
  );
};

