import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setcount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setcount(newCount);
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
