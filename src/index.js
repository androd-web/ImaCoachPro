import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext"; 
import { SidebarProvider } from "./Dashbord/context/sidebarContext.jsx";
import "./App.css";

// Import Bootstrap CSS,Js
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Import GSAP si nécessaire dans tes composants
import "./index.css"; // Styles globaux optionnels
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <AuthProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AuthProvider>
  </React.StrictMode>
);
