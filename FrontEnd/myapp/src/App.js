import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UserScreens/Home";
import About from "./UserScreens/About";
import Login from "./UserScreens/Login";
import { Register } from "./UserScreens/Register";
import Navbar from "./Components/Navbar";
import Alluser from "./UserScreens/Alluser";
import AdminLogin from "./AdminScreen/AdminLogin";
import DashBoard from "./AdminScreen/DashBoard";
import AdminCategory from "./AdminScreen/AdminCategory";
import AllProducts from "./AdminScreen/AllProducts";
import AdminAuth from "./AdminScreen/AdminAuth";
import AuthUser from "./UserScreens/AuthUser";
import Contact from './UserScreens/Contact'
import Prodoucts from "./UserScreens/Products";
import DetailPage from "./UserScreens/DetailPage";
import Cart from "./UserScreens/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<AuthUser />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          <Route path="/pro" element={<Prodoucts />} />
          </Route>
          <Route path="/users" element={<Alluser />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<DashBoard />} />
          <Route path="/admincategory" element={<AdminCategory />} />
          <Route path="/adminproducts" element={<AllProducts />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
