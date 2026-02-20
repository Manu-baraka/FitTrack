import { useState, useEffect } from 'react'
import UserForm from './components/UserForm.jsx'
import DailyTracker from './components/DailyTracker.jsx'
import FoodSearch from './components/FoodSearch.jsx'
import WeeklyHistory from './components/WeeklyHistory.jsx'
import { calculateBMR } from './utils/bmr.js'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const [dailyfoods, setDailyFoods] = useState([]);

  const addFood = food => {
    setDailyFoods(prev => [...prev, food]);
  };

  const bmr = user ? calculateBMR(user.age, user.weight, user .height, user.gender) : null;

  return (
    <div className="p-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
          <p className="text-lg">Your BMR is {bmr} kcal/day</p>
          <DailyTracker />
          <FoodSearch addFood={addFood} />
          <WeeklyHistory />
        </>
      ) : (
        <UserForm setUser={setUser} />
      )}
    </div>
  )
}

  // Load user info from localStorage on app start

export default App;
