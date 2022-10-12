import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LayoutAdmin from './components/LayoutAdmin';
import LayoutUser from './components/LayoutUser';
import NotFound from './pages/error/NotFound';
import BlogManager from './pages/private/BlogManager';
import OrderHistory from './pages/private/OrderHistory';
import PrivateRoutes from './pages/private/PrivateRoutes';
import Profile from './pages/private/Profile';
import UserManager from './pages/private/UserManage';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Shop from './pages/public/Shop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<LayoutUser />}>
          <Route element={<PrivateRoutes />}>
            <Route path="profile" element={<Profile />} />
            <Route path="order-history" element={<OrderHistory />} />
          </Route>
        </Route>

        <Route path="/" element={<LayoutAdmin />}>
          <Route element={<PrivateRoutes />}>
            <Route path="admin/blogs" element={<BlogManager />} />
            <Route path="admin/users" element={<UserManager />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
