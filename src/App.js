import { Routes, Route } from "react-router-dom";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/homePage";
import Products from "./components/products";
import Signup from "./components/signup";
import Login from "./components/login";
import ProductDetail from "./components/productDetail";
import Profile from "./components/profile";
import axios from "axios";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/mobile" element={<Products />} exact />
          <Route path="/tablet" element={<Products />} exact />
          <Route path="/laptop" element={<Products />} exact />
          <Route path="/mobile/samsung" element={<Products />} exact />
          <Route path="/tablet/samsung" element={<Products />} exact />
          <Route path="/laptop/lenovo" element={<Products />} exact />
          <Route path="/mobile/xiaomi" element={<Products />} exact />
          <Route path="/tablet/xiaomi" element={<Products />} exact />
          <Route path="/laptop/asus" element={<Products />} exact />
          <Route path="/mobile/apple" element={<Products />} exact />
          <Route path="/tablet/apple" element={<Products />} exact />
          <Route path="/laptop/apple" element={<Products />} exact />
          <Route path="/shop/iphone" element={<ProductDetail />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
