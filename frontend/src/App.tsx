import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { LoginSignup } from "./pages/LoginSignup";
import { Cart } from "./pages/Cart";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Footer } from "./components/Footer/Footer";
import menBanner from "./components/assets/banner_mens.png";
import womenBanner from "./components/assets/banner_women.png";
import kidsBanner from "./components/assets/banner_kids.png";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={menBanner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={womenBanner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kidsBanner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <GlobalStyles />
      <Footer />
    </BrowserRouter>
  );
};
