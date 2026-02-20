import WeeklyHistory from "../components/WeeklyHistory";

export default function WeeklyPage() {
  return (
    <div className="p-4 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Weekly History</h1>
      <WeeklyHistory />
    </div>
  );
}
