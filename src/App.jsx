import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { HomePage } from "./pages/Home/HomePage";
import { AgentPage } from "./pages/AgentPage/AgentPage";
import ListingPage from "./pages/HouseListing/HouseListing";
import LoginPage from "./pages/Login/LoginPage";
import  AboutusPage from "./pages/AboutUs/AboutUs";
import ContactPage from "./pages/ContactUs/ContactPage";
import HouseDetailsPage from "./pages/HomeDetails/HouseDetailsPage";
import { AgentDetailsPage } from "./pages/AgentDetails/AgentDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage />} />
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
