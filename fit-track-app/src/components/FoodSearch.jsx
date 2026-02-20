import { useState } from "react";
import axios from "axios";

export default function FoodSearch({ addFood }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchFood = async () => {
    try {
      if (!query) return alert("Type a food name");

      const appId = "YOUR_REAL_APP_ID";
      const appKey = "YOUR_REAL_APP_KEY";

      const realApiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${query}`;
      const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(realApiUrl)}`;

      const res = await axios.get(url);
      console.log(res.data);
      setResults(res.data.hints || []);

    } catch (err) {
      console.error("API ERROR:", err);
      alert("Check console for API error");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input 
        placeholder="Search food..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        className="border p-2 w-full"
      />
      <button onClick={searchFood} className="bg-green-500 text-white p-2 mt-2 w-full">
        Search
      </button>

      <ul className="mt-4 space-y-2">
        {results.map((item, idx) => (
          <li key={idx} className="border p-2 flex justify-between">
            <span>{item.food.label}</span>
            <span>{Math.round(item.food.nutrients.ENERC_KCAL)} kcal</span>
            <button onClick={() => addFood(item.food)} className="bg-blue-500 text-white p-1">
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
