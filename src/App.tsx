// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  incrementByFive,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  //
  const fruits = ["melon", "watermelon", "custard apple", "pear"];

  console.log(fruits);
  console.log(fruits.push("Lychee"));
  const immutableFruits = [...fruits];
  console.log(immutableFruits.push("pear"));
  console.log(fruits);
  console.log(immutableFruits);

  const { count } = useAppSelector((state) => state?.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center border-2 border-gray-500 py-20 rounded bg-gray-100">
        <button
          className="text-white bg-blue-700 rounded w-40 h-7"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p className="text-xl">Value-{count}</p>
        <button
          className="text-white bg-blue-700 rounded w-40 h-7"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className="text-white bg-blue-700 rounded w-40 h-7 ml-5"
          onClick={() => dispatch(incrementByFive(5))}
        >
          Increment By Five
        </button>
      </div>
    </div>
  );
}

export default App;
