import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import TodoFeature from "./features/Todo";
import TodoAdd from "./features/Todo/pages/TodoAdd";
import TodoEdit from "./features/Todo/pages/TodoEdit";
import BlogFeature from "./features/Blog";

function App() {
  return (
    <div className="App">
      <div>
        Header
      </div>

      <div>
        <Link to="/todo">Todo Page</Link>
        <Link to="/blog">Blog Page</Link>
      </div>


      <Routes>
        <Route path="/" element={<TodoFeature />} />
        <Route path="/todo" element={<TodoFeature />}>
          <Route path="/todo/add" element={<TodoAdd />} />
          <Route path="/todo/edit" element={<TodoEdit />} />
        </Route>
        <Route path="/blog" element={<BlogFeature />} />
      </Routes>

      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
