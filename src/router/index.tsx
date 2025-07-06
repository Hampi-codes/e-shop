import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetail from "../pages/productDetails";
import NotFound from "../pages/notFound";
import Cart from "../pages/cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id/details" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
