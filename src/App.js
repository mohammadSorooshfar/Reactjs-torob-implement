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
          <Route path="/mobiles" element={<Products />} exact />
          <Route path="/tablets" element={<Products />} exact />
          <Route path="/laptops" element={<Products />} exact />
          <Route path="/mobiles/samsung" element={<Products />} exact />
          <Route path="/tablets/samsung" element={<Products />} exact />
          <Route path="/laptops/lenovo" element={<Products />} exact />
          <Route path="/mobiles/xiaomi" element={<Products />} exact />
          <Route path="/tablets/xiaomi" element={<Products />} exact />
          <Route path="/laptops/asus" element={<Products />} exact />
          <Route path="/mobiles/apple" element={<Products />} exact />
          <Route path="/tablets/apple" element={<Products />} exact />
          <Route path="/laptops/apple" element={<Products />} exact />
          <Route path="/shop/iphone" element={<ProductDetail />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
