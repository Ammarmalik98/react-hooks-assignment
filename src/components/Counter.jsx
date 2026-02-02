import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card counter-card">
      <h2>Counter</h2>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button
          className="btn-increment"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="btn-decrement"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button
          className="btn-reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>
    </div>
  );
}
