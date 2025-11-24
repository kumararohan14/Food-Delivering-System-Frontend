import React, { useState } from "react";

export default function BadList() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Rice"]);

  const deleteItem = (indexToDelete) => {
    // Standard way to remove an item from an array
    const newFoods = foods.filter((_, index) => index !== indexToDelete);
    setFoods(newFoods);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>The "Bad Key" Experiment</h2>
      <ul>
        {foods.map((food, index) => (
          // ⚠️ BUG SOURCE: Using 'index' as key
          <li key={index} style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              {index + 1}. {food}
            </span>
            
            {/* The input represents "Internal State" (The Sticker) */}
            <input placeholder="Type notes here..." />
            
            <button 
              onClick={() => deleteItem(index)} 
              style={{ marginLeft: "10px" }}
            >
              Delete Me
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}