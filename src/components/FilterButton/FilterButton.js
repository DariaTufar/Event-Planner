import React, { useState } from "react";

export const FilterButton = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label>
        Filter by Category:
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};


