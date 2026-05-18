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

import UserManagement from "./pages/UserManagement";
import FinancialReports from "./pages/FinancialReports";
import SystemSettings from "./pages/SystemSettings";

import About from "./pages/About";
import AddBook from "./pages/AddBook";
import BorrowingHistory from "./pages/BorrowingHistory";
import ManageRequests from "./pages/ManageRequests";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/book/:id" element={<BookDetails />} />

                {/* admin pages-muna */}
                <Route path="/users" element={<UserManagement />} />
                <Route path="/financial" element={<FinancialReports />} />
                <Route path="/settings" element={<SystemSettings />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/about" element={<About />} />
                <Route path="/admin/add-book" element={<AddBook />} />
                <Route path="/borrowing-history" element={<BorrowingHistory />} />
                <Route path="/manage-requests" element={<ManageRequests />} />
            </Routes>


            ;
            <Footer />
        </BrowserRouter>
    );
}

export default App;