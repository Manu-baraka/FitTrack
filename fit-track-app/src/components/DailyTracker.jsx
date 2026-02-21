// DailyTracker.jsx
import { useState, useEffect } from "react";
import FoodSearch from "./FoodSearch.jsx";

export default function DailyTracker() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dailyFoods, setDailyFoods] = useState([]);

  // Load foods when date changes
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(selectedDate)) || [];
    setDailyFoods(saved);
  }, [selectedDate]);

  // Save foods whenever dailyFoods changes
  useEffect(() => {
    localStorage.setItem(selectedDate, JSON.stringify(dailyFoods));
  }, [dailyFoods, selectedDate]);

  const addFood = (food) => setDailyFoods((prev) => [...prev, food]);
  const removeFood = (index) =>
    setDailyFoods((prev) => prev.filter((_, i) => i !== index));

  const totalCalories = dailyFoods.reduce(
    (sum, f) => sum + (f.calories || 0),
    0
  );

  return (
    <div className="p-4 border rounded shadow mb-6">
      {/* Date picker */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
          max={new Date().toISOString().split("T")[0]}
        />
      </div>

      {/* Food search */}
      <FoodSearch addFood={addFood} />

      {/* Daily food list */}
      <h2 className="text-xl font-semibold mt-6">
        Foods for {selectedDate} ({dailyFoods.length})
      </h2>
      <ul className="space-y-2 mt-2">
        {dailyFoods.map((f, idx) => (
          <li
            key={idx}
            className="border p-2 flex justify-between items-center"
          >
            <span>{f.label}</span>
            <span>{Math.round(f.calories)} kcal /100g</span>
            <button
              onClick={() => removeFood(idx)}
              className="bg-red-500 text-black px-2 py-1 rounded ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-bold text-lg">
        Total Calories: {Math.round(totalCalories)} kcal
      </p>
    </div>
  );
}
