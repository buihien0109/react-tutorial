import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserAdd from './features/user/UserAdd';
import UserEdit from './features/user/UserEdit';
import UserList from './features/user/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/users'>
          <Route index element={<UserList />} />
          <Route path='create' element={<UserAdd />} />
          <Route path=':userId' element={<UserEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
