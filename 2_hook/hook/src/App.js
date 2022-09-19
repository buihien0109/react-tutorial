import { useCallback, useState } from "react";
// import Counter from './hook-useState/Counter';
// import Content from './hook-useEffect/Content';
// import Api from './hook-useEffect/Api';
// import Clock from './hook-useEffect/Clock';
// import ApiOther from './hook-useEffect/ApiOther';
// import Content from './hook-useRef/Content';
// import Blog from "./reactmemo/Blog";
// import Blog from "./hook-useCallback/Blog";
// import AvatarPreview from "./hook-useEffect/AvatarPreview";
// import Counter from "./hook-useReducer/Counter";
// import TodoList from "./hook-useReducer/TodoList";
// import Theme from "./hook-useContext/Theme";
// import TodoList from "./global-state/TodoList";
// import DogApi from "./custom-hook/DogApi";
// import Content from "./custom-hook/Content";
import Color from "./custom-hook/Color";
import "./App.css";

function App() {
  // 1. Sử dụng useEffect - Clock
  // const [isShowClock, setIsShowClock] = useState(true);

  // 2. Sử dụng useCallback
  // const [count, setCount] = useState(0);
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: "Bùi hiên"
  // });

  // const addCount = () => {
  //   setCount(count + 1);
  // };

  // const handleAnyThing = useCallback(() => {
  //   console.log("handleAnyThing")
  // }, [count])

  return (
    <div style={{ height: 2000 }}>
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}

      {/* <h1>Counter {count}</h1>
      <button onClick={addCount}>Add</button>

      <Blog handleAnyThing={handleAnyThing} /> */}

      <Color />
    </div>
  );
}

export default App;
