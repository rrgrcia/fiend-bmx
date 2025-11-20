import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ShopPage from "@/react-app/pages/Shop";
import TeamPage from "@/react-app/pages/Team";
import ContactPage from "@/react-app/pages/Contact";
import LoginPage from "@/react-app/pages/Login";
import CartPage from "@/react-app/pages/Cart";
import Layout from "@/react-app/components/Layout";
import { CartProvider } from "@/react-app/contexts/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
