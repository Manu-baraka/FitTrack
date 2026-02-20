// FoodSearch.jsx
import { useState } from "react";

export default function FoodSearch({ addFood }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFood = async () => {
    const trimmed = query.trim();
    if (!trimmed) return alert("Type a food name");

    setLoading(true);
    setResults([]);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          trimmed
        )}&search_simple=1&json=1&page_size=10`
      );
      const data = await res.json();

      const foods = data.products.map((item) => {
        let calories = 0;
        if (item.nutriments) {
          calories =
            item.nutriments["energy-kcal_100g"] ||
            (item.nutriments["energy_100g"]
              ? Math.round(item.nutriments["energy_100g"] / 4.184)
              : 0);
        }
        return {
          label: item.product_name || "Unknown Food",
          calories,
        };
      });

      setResults(foods);
    } catch (err) {
      console.error("API ERROR:", err);
      alert("Food search failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Search food (e.g. banana, rice)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1"
          onKeyDown={(e) => e.key === "Enter" && searchFood()}
        />
        <button
          onClick={searchFood}
          className="bg-green-500 text-white px-4 rounded"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <ul className="space-y-2">
        {results.map((food, idx) => (
          <li
            key={idx}
            className="border p-2 flex justify-between items-center"
          >
            <span>{food.label}</span>
            <span>{Math.round(food.calories)} kcal /100g</span>
            <button
              onClick={() => addFood(food)}
              className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
