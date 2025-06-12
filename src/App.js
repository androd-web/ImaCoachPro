import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "./context/AuthContext";

// Components
import Navbar from "./Components/Navbar";

// Pages publiques
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Composants du Dashboard
import Budget from "./Dashbord/components/Budget/Budget";
import Cards from "./Dashbord/components/Cards/Cards";
import Transactions from "./Dashbord/components/Transactions/Transactions";
import Loans from "./Dashbord/components/Loans/Loans";
import ContentMain from "./Dashbord/components/ContentMain/ContentMain";
import ContentTop from "./Dashbord/components/ContentTop/ContentTop";
import Report from "./Dashbord/components/Report/Report";
import Savings from "./Dashbord/components/Savings/Savings";
import Subscriptions from "./Dashbord/components/Subscriptions/Subscriptions";
import Financial from "./Dashbord/components/Financial/Financial";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Route protégée */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login />}
        />

        {/* Routes internes du dashboard */}
        <Route path="/budget" element={<Budget />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/contentTop" element={<ContentTop />} />
        <Route path="/report" element={<Report />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/saving" element={<Savings />} />
        <Route path="/contentMain" element={<ContentMain />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
