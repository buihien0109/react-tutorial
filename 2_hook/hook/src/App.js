import { useCallback, useState } from "react";
import Blog from "./reactmemo/Blog";
import "./App.css";

function App() {
  // 1. Sử dụng useEffect - Clock
  // const [isShowClock, setIsShowClock] = useState(true);

  return (
    <div style={{ height: 2000, padding: 20 }}>
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}

      <Blog />
    </div>
  );
}

export default App;
