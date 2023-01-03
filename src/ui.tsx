import React from "react";
import { createRoot } from 'react-dom/client';
import "./ui.css";

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0);
    window.parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <main>
      <header>
        <h2>Rectangle Creator</h2>
      </header>
      <section>
        <input id="input" type="number" min="0" ref={inputRef} />
        <label htmlFor="input">Rectangle Count</label>
      </section>
      <footer>
        <button className="brand" onClick={onCreate}>
          Create
        </button>
        <button onClick={onCancel}>Cancel</button>
      </footer>
    </main>
  );
}

const container = document.getElementById('app');
/**
 * In TypeScript, the exclamation mark (!) after a variable or property name indicates that
 * the variable or property is non-nullable, meaning it is guaranteed to have a value.
 */
const root = createRoot(container!);
root.render(<App />);