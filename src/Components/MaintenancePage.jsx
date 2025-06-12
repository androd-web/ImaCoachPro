import React from "react";
import "../assets/style/MaintenancePage.css";
import { Link } from "react-router-dom";
import maintenance from "../assets/img/maintenance.jpg";

const MaintenancePage = () => {
  return (
    <div className="maintenance-page">
      {/* Section principale */}
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Colonne gauche : Illustration */}
          <div className="col-md-6 illustration-section">
            <img
              src={maintenance}
              alt="Illustration de maintenance"
              className="illustration"
            />
          </div>

          {/* Colonne droite : Contenu textuel */}
          <div className="col-md-6 content-section">
            <h1 className="title">
              Oops, notre page est temporairement indisponible
            </h1>
            <p className="subtitle">
              Nous effectuons actuellement des travaux de maintenance pour
              améliorer votre expérience. Pas d’inquiétude, la page sera bientôt
              de retour. Merci pour votre compréhension et a très vite !
            </p>
            <Link to="/"> 
              <button className="btn get-started-btn text-capitalize fw-bold "style={{background: 'var(--clr-pumpkinDark)'}}>
                Page principale
              </button>
            </Link>

            {/* Indicateur de progression */}
            <div className="progress-indicator">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
