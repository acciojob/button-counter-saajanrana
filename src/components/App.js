import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [click, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Button clicked ${click} times</p>
      <button onClick={() =>{ setCount(click + 1)} }>Clike me</button>
    </div>
  )
}

export default App