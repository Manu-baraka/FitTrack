// UserForm.jsx - collects user info (name, age, weight, height, gender) and saves to localStorage
import { useState } from "react";

// This form allows the user to input their personal information, which is needed to calculate BMR and provide personalized recommendations. The data is saved to localStorage so it persists across sessions.
export default function UserForm({ setUser }) {
  const [form, setForm] = useState({ name: "", age: "", weight: "", height: "", gender: "male" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // When the form is submitted, save the user info to localStorage and update the user state in the parent component
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
  }

  // Render the form with inputs for name, age, weight, height
  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full"/>
      <input name="age" type="number" placeholder="Age" onChange={handleChange} className="border p-2 w-full"/>
      <input name="weight" type="number" placeholder="Weight (kg)" onChange={handleChange} className="border p-2 w-full"/>
      <input name="height" type="number" placeholder="Height (cm)" onChange={handleChange} className="border p-2 w-full"/>
      <select name="gender" onChange={handleChange} className="border p-2 w-full">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Save</button>
    </form>
  )
}
