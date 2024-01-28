import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onClickChange = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Reactの復習</h1>
      <p>{count}</p>
      <button onClick={onClickChange}>カウントアップ</button>
    </div>
  );
}

export default App;
