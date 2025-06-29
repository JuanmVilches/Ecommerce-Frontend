import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import AdminProducts from './pages/AdminProducts/AdminProducts';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import AdminUsers from './pages/AdminUsers/AdminUsers';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/adminusers" element={<AdminUsers />} />
      </Routes>
      <Footer />
    </>
  );
}
