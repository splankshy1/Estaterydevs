import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import LaunchPage from "./pages/Launch/LaunchPage";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const { pathname } = useLocation();
  const isLaunchPage = pathname === "/launch";

  return (
      <div className="app">
        {!isLaunchPage && <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/agents" element={<AgentPage />} />
          <Route path="/agents/:id" element={<AgentDetailsPage />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route path="/listings/:id" element={<HouseDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>

        {!isLaunchPage && <Footer />}
      </div>
  );
}

export default App;
