import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to React Toolkit 🚀");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>{message}</h1>

      <button
        onClick={() => setMessage("You just updated React state!")}
        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
