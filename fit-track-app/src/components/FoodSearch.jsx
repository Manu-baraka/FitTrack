// FoodSearch.jsx - allows user to search for foods using Edamam API and add them to today's tracker
import { useState } from "react";
import axios from "axios";

// Edamam API after signing up for a free account and creating an app to get your own appId and appKey
export default function FoodSearch({ addFood }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Search for foods using Edamam API and update results state
  const searchFood = async () => {
    const appId = "YOUR_APP_ID";
    const appKey = "YOUR_APP_KEY";

    const res = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: { app_id: appId, app_key: appKey, ingr: query }
    });
    setResults(res.data.hints);
  }

  // Render search input, button, and results list with add buttons
  return (
    <div className="p-4 max-w-md mx-auto">
      <input 
        placeholder="Search food..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        className="border p-2 w-full"
      />
      <button onClick={searchFood} className="bg-green-500 text-white p-2 mt-2 w-full">Search</button>

      <ul className="mt-4 space-y-2">
        {results.map((item, idx) => (
          <li key={idx} className="border p-2 flex justify-between">
            <span>{item.food.label}</span>
            <span>{Math.round(item.food.nutrients.ENERC_KCAL)} kcal</span>
            <button onClick={() => addFood(item.food)} className="bg-blue-500 text-white p-1">Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
