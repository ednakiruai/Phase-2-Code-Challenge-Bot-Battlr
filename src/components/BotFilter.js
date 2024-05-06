import React from "react";

function ClassFilter({ classes, selectedClasses, handleClassChange }) {
  return (
    <div>
      <h4>Filter by Class:</h4>
      {classes.map((botClass) => (
        <div key={botClass}>
          <label>
            <input
              type="checkbox"
              value={botClass}
              checked={selectedClasses.includes(botClass)}
              onChange={handleClassChange}
            />
            {botClass}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ClassFilter;
