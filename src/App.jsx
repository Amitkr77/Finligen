import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./components/Testhero";

import ScrollToTop from "./components/Scrollup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import Cpa from "./pages/Cpa-firms";
import Blog from "./pages/FinliGenBlog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Cpa-firms" element={<Cpa/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}