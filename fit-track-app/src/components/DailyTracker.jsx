// DailyTracker.jsx - shows today's food intake and total calories, allows adding new foods
import { useEffect, useState } from "react";

export default function DailyTracker() {
  const today = new Date().toISOString().split("T")[0];
  const [foods, setFoods] = useState(JSON.parse(localStorage.getItem(today)) || []);

  // Add a food item to today's list and update localStorage
  const addFood = food => {
    const updated = [...foods, { ...food, date: today }];
    setFoods(updated);
    localStorage.setItem(today, JSON.stringify(updated));
  }

  // Calculate total calories for today's foods
  const totalCalories = foods.reduce((sum, f) => sum + (f.nutrients.ENERC_KCAL || 0), 0);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Today's Intake</h2>
      <ul className="space-y-2">
        {foods.map((f, idx) => <li key={idx}>{f.label} - {Math.round(f.nutrients.ENERC_KCAL)} kcal</li>)}
      </ul>
      <p className="mt-2 font-bold">Total: {Math.round(totalCalories)} kcal</p>
    </div>
  )
}
