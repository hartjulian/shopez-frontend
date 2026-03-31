import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Confirmation from "../pages/Confirmation";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout /> } />
          <Route path="/confirmation" element={<Confirmation /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}