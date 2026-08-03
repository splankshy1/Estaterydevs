import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AgentPage } from "./pages/AgentPage";
import ListingPage from "./pages/HouseListingPage";
import LoginPage from "./pages/LoginPage";
import { AbooutusPage } from "./pages/AbooutusPage";
import ContactPage from "./pages/ContactPage";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import { AgentDetailsPage } from "./pages/AgentDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AbooutusPage />} />
          <Route path="/agents" element={<AgentPage />} />
          <Route path="/agents/:id" element={<AgentDetailsPage />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route path="/listings/:id" element={<HouseDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
