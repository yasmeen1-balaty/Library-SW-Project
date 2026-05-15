import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BookDetails from "./pages/Bookdetails";

import UserManagement from "./pages/UserManagement";
import FinancialReports from "./pages/FinancialReports";
import SystemSettings from "./pages/SystemSettings";

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
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
