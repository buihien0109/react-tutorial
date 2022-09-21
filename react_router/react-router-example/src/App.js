import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import BestSeller from "./components/BestSeller";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import Customers from "./components/Customers";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import OrderDetail from "./components/OrderDetail";
import Users from "./components/private/Users";
import Roles from "./components/private/Roles";
import PrivateRoutes from "./components/private/PrivateRoutes";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10 p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders">
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<OrderDetail />} />
            </Route>
            <Route path="/products" element={<Products />}>
              <Route index element={<BestSeller />} />
              <Route path="laptop" element={<Laptop />} />
              <Route path="desktop" element={<Desktop />} />
            </Route>
            <Route path="/customers" element={<Customers />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/roles' element={<Roles />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
