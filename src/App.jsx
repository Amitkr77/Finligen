import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./components/Testhero";

import ScrollToTop from "./components/Scrollup";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}