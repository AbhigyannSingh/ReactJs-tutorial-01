import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100%",
        height: "100vh",
        transition: "background-color 0.2s",
      }}
      
    >
      <button onClick={() => setColor("red")} style={{ margin: 20 }}>Red</button>
      <button onClick={() => setColor("green")} style={{ margin: 20 }}>Green</button>
      <button onClick={() => setColor("blue")} style={{ margin: 20 }}>Blue</button>
    </div>
  );
}

export default App;
