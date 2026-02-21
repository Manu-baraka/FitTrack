import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

export default function WeeklyHistory() {
  const today = new Date();
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - i);
    return d.toISOString().split("T")[0];
  }).reverse();

  const dataValues = week.map(day => {
    const foods = JSON.parse(localStorage.getItem(day)) || [];
    return foods.reduce((sum, f) => sum + (f.calories || 0), 0);
  });

  const data = {
    labels: week,
    datasets: [
      {
        label: "Calories",
        data: dataValues,
        backgroundColor: "rgba(59,130,246,0.7)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: { color: "black" },
      },
    },
    scales: {
      x: { ticks: { color: "black" } },
      y: { ticks: { color: "black" } },
    },
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <Bar data={data} options={options} />
    </div>
  );
}
