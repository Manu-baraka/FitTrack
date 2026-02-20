import UserForm from "../components/UserForm";
import { calculateBMR } from "../utils/bmr";

export default function Home({ user, setUser }) {
  const bmr = user
    ? calculateBMR(user.age, user.weight, user.height, user.gender)
    : null;

  return (
    <div className="p-4 max-w-md mx-auto text-white">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
          <p className="text-lg">Your BMR is {bmr} kcal/day</p>
        </>
      ) : (
        <UserForm setUser={setUser} />
      )}
    </div>
  );
}
