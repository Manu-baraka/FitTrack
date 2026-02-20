// App.jsx
import UserForm from "./components/UserForm.jsx";
import DailyTracker from "./components/DailyTracker.jsx";
import WeeklyHistory from "./components/WeeklyHistory.jsx";
import { useState } from "react";
import { calculateBMR } from "./utils/bmr.js";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const bmr = user
    ? calculateBMR(user.age, user.weight, user.height, user.gender)
    : null;

  return (
    <div className="p-4 max-w-md mx-auto">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h1>
          <p className="text-lg mb-4">Your BMR is {bmr} kcal/day</p>

          {/* DailyTracker now contains its own FoodSearch */}
          <DailyTracker />

          {/* Weekly summary component */}
          <WeeklyHistory />
        </>
      ) : (
        <UserForm setUser={setUser} />
      )}
    </div>
  );
}
export default App;