import DailyTracker from "../components/DailyTracker";

export default function DailyPage() {
  return (
    <div className="p-4 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Daily Tracker</h1>
      <DailyTracker />
    </div>
  );
}
