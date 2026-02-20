// WeeklyHistory.jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement);

// This component shows a bar chart of calories consumed over the past 7 days
export default function WeeklyHistory() {
  const today = new Date();
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - i);
    return d.toISOString().split("T")[0];
  }).reverse();

  const data = week.map(day => {
    const foods = JSON.parse(localStorage.getItem(day)) || [];
    return foods.reduce((sum, f) => sum + (f.nutrients.ENERC_KCAL || 0), 0);
  });

  // Chart.js bar chart configuration
  return (
    <div className="p-4 max-w-md mx-auto">
      <Bar 
        data={{
          labels: week,
          datasets: [{ label: 'Calories', data, backgroundColor: 'rgba(59, 130, 246, 0.7)' }]
        }}
      />
    </div>
  )
}
