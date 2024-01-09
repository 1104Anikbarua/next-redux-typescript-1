import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center border-2 border-gray-500 py-20 rounded bg-gray-100">
        <button className="text-white bg-blue-700 rounded w-40 h-7">
          Increment
        </button>
        <p className="text-xl">Value-{0}</p>
        <button className="text-white bg-blue-700 rounded w-40 h-7">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
