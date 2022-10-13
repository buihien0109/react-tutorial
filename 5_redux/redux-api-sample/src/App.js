import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostDetail from './components/PostDetail';
import PostList from './components/PostList';
import UserList from './components/UserList';
import UserPost from './components/UserPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/users'>
          <Route index element={<UserList />} />
          <Route path=':userId/posts' element={<UserPost />} />
        </Route>
        <Route path='/posts'>
          <Route index element={<PostList />} />
          <Route path=':postId' element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
