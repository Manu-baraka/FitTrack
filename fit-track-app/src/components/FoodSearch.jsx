// FoodSearch.jsx - Search foods using OpenFoodFacts (FREE API, NO KEY)
import { useState } from "react";

export default function FoodSearch({ addFood }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchFood = async () => {
    try {
      if (!query) return alert("Type a food name");

      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1&page_size=10`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data); // DEBUG

      // Map API response to usable format
      const foods = data.products.map(item => ({
        label: item.product_name || "Unknown Food",
        calories: item.nutriments?.["energy-kcal_100g"] || 0
      }));

      setResults(foods);

    } catch (err) {
      console.error("API ERROR:", err);
      alert("Food search failed. Check console.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        placeholder="Search food (e.g. banana, rice)..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 w-full"
      />

      <button onClick={searchFood} className="bg-green-500 text-white p-2 mt-2 w-full">
        Search
      </button>

      <ul className="mt-4 space-y-2">
        {results.map((item, idx) => (
          <li key={idx} className="border p-2 flex justify-between items-center">
            <span>{item.label}</span>
            <span>{Math.round(item.calories)} kcal /100g</span>

            <button 
              onClick={() => addFood(item)} 
              className="bg-blue-500 text-white p-1 px-2 rounded"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
