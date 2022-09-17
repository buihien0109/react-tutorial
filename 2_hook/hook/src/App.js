// import Counter from './hook-useState/Counter';
// import Content from './hook-useEffect/Content';
// import Api from './hook-useEffect/Api';
// import Clock from './hook-useEffect/Clock';
// import ApiOther from './hook-useEffect/ApiOther';
// import Content from './hook-useRef/Content';
// import Blog from "./reactmemo/Blog";
import Blog from "./hook-useCallback/Blog";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [isShowClock, setIsShowClock] = useState(true);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    id: 1,
    name: "Bùi hiên"
  });

  const addCount = () => {
    setCount(count + 1);
  };

  const handleAnyThing = useCallback(() => {
    console.log("handleAnyThing")
  }, [count])

  return (
    <div className="App" style={{ height: 2000 }}>
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}

      <h1>Counter {count}</h1>
      <button onClick={addCount}>Add</button>

      <Blog handleAnyThing={handleAnyThing} />
    </div>
  );
}

export default App;
