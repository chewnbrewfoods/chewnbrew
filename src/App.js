import React from "react";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white", color: "gray", textAlign: "center", padding: "2rem" }}>
      <img src="/logo.png" alt="Chew N Brew Logo" style={{ maxHeight: "100px", marginBottom: "1.5rem" }} />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Chew N Brew</h1>
      <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: "1.5rem" }}>Eat on the Go</p>
      <button style={{ backgroundColor: "#facc15", color: "#000", fontSize: "1rem", padding: "0.5rem 1.5rem", borderRadius: "9999px", border: "none" }}>
        Order Now
      </button>
    </div>
  );
}

export default App;
