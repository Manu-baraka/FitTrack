import { useState } from "react";
import axios from "axios";

export default function FoodSearch({ addFood }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchFood = async () => {
    const appId = "YOUR_APP_ID";
    const appKey = "YOUR_APP_KEY";

    const res = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: { app_id: appId, app_key: appKey, ingr: query }
    });
    setResults(res.data.hints);
  }

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
