import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <p>React Counter (Client Component)</p>
      <button
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}
