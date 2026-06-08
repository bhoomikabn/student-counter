import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
    <h1>Student Counter</h1>

      <h2>Total Students: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add Student
      </button>
    </div>
  );
}

export default App;