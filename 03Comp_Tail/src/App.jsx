import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button
          className="bg-gray-700 text-white p-3 rounded-md hover:bg-black"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
      <p>Developer Details.</p>
      <div className="flex gap-4 ">
        <Card first="Nitin" BtnText="Click me" work="FrontEnd Developer" />
        <Card first="Ashish" work="FullStack Developer / Java Developer" />
        <Card first="Mama"/>
        <Card first="Butterfly"/>
      </div>
    </>
  );
}

export default App;
