import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BookDetails from "./pages/Bookdetails";
import Login from "./pages/login";
import Register from "./pages/Register";
import StudentPortal from "./pages/StudentPortal";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;