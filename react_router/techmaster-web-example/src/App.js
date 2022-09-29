import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Course from "./pages/Course";
import CourseDetail from "./pages/Course/CourseDetail";
import Track from "./pages/Track";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import ShoppingCart from "./pages/ShoppingCart";
import PrivateRoutes from "./pages/private/PrivateRoutes";
import Profile from "./pages/private/Profile";
import OrderHistory from "./pages/private/OrderHistory";
import SecurityAccount from "./pages/private/SecurityAccount";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lo-trinh" element={<Track />} />
          <Route path="khoa-hoc">
            <Route index element={<Course />} />
            <Route path=":courseId" element={<CourseDetail />} />
          </Route>
          <Route path="trung-tam" element={<About />} />
          <Route path="san-pham-hoc-vien" element={<Project />} />
          <Route path="bai-viet" element={<Blog />} />
          <Route path="gio-hang" element={<ShoppingCart />} />
          <Route path="thanh-toan" element={<Checkout />} />

          <Route element={<PrivateRoutes />}>
            <Route path="ho-so-ca-nhan" element={<Profile />} />
            <Route path="lich-su-giao-dich" element={<OrderHistory />} />
            <Route path="bao-mat-tai-khoan" element={<SecurityAccount />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
