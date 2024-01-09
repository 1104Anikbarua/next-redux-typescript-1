import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state?.counter);
  const dispatch = useDispatch();
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
      </div>
    </div>
  );
}

export default App;
