import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import User from "./pages/User";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users'>
          <Route index element={<User />} />
          <Route path=':userId' element={<EditUser />} />
          <Route path='create' element={<CreateUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
