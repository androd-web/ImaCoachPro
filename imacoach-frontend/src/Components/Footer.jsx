 import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { iconsImgs } from "../Dashbord/utils/images";
import logoPro from "../assets/img/logo1.png";
import "../assets/style/Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  const footerRef = useRef(null);
  const aboutRef = useRef(null);
  const linksRef = useRef(null);
  const hoursRef = useRef(null);
  const contactRef = useRef(null);

  // Animation GSAP pour chaque section
  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        // opacity: 0,           // Opacité doit commencer à 0 pour apparaître
        y: 50,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",    // correction : clearProps (pas clearPropos)
      });
    }

    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        // opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }

    if (linksRef.current) {
      gsap.from(linksRef.current, {
        // opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }

    if (hoursRef.current) {
      gsap.from(hoursRef.current, {
        // opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });
    }

    if (contactRef.current) {
      gsap.from(contactRef.current, {
        // opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });
    }
  }, []);

  return (
     <footer ref={footerRef} className=" pt-5" style={{color: 'dark'}}>
  {/* Section d’abonnement */}
  <div className="container pb-4 border-bottom border-secondary">
    <div className="row align-items-center mb-4">
      <div className="col-md-6 d-flex align-items-center">
        <img src={logoPro} alt="logo"style={{width: '100px', height: 'auto'}} />
        <span className="fw-bold fs-3">Abonnez-vous à notre newsletter</span>
      </div>
      <div className="col-md-6 text-md-end mt-3 mt-md-0">
        <form className="d-flex gap-2 justify-content-md-end" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Votre email"
            className="form-control form-control-sm bg-light text-dark"
            aria-label="Email pour abonnement"
          />
          <Link to="Login"><button type="submit" className="btn btn-sm fw-bold" style={{background: "var(--clr-pumpkinDark)"}}>
            S'abonner
          </button></Link>
          
        </form>
      </div>
    </div>
  </div>

  {/* Contenu principal */}
  <div className="container py-5">
    <div className="row g-4">
      {/* À propos */}
      <div ref={aboutRef} className="col-md-3">
        <h5 className="text-uppercase fw-bold mb-3 text-dark">À propos</h5>
        <p className="" style={{fontSize: '17px'}}>
          ImacoachPro vous accompagne dans votre développement personnel et professionnel. Rejoignez-nous pour transformer votre avenir.
        </p>
      </div>

      {/* Liens */}
      <div ref={linksRef} className="col-md-3">
        <h5 className="text-uppercase fw-bold mb-3 text-dark">Liens utiles</h5>
        <ul className="list-unstyled" style={{fontSize: '17px', color: 'var(--clr-pumpkinDark)'}}>
          <li><a href="/about" className=" text-decoration-none fw-bold" style={{ color: 'var(--clr-pumpkinDark)'}}>À propos</a></li>
          <li><a href="/services" className=" text-decoration-none fw-bold" style={{ color: 'var(--clr-pumpkinDark)'}}>Services</a></li>
          <li><a href="/case-studies" className=" text-decoration-none fw-bold" style={{ color: 'var(--clr-pumpkinDark)'}}>Études de cas</a></li>
          <li><a href="/request-pickup" className=" text-decoration-none fw-bold" style={{ color: 'var(--clr-pumpkinDark)'}}>Prise de rendez-vous</a></li>
          <li><a href="/contact" className=" text-decoration-none fw-bold" style={{ color: 'var(--clr-pumpkinDark)'}}>Contact</a></li>
        </ul>
      </div>

      {/* Horaires */}
      <div ref={hoursRef} className="col-md-3">
        <h5 className="text-uppercase fw-bold mb-3 text-dark">Horaires</h5>
        <p style={{fontSize: '17px'}} className=" mb-1">Lun - Ven : 9h00 - 18h00</p>
        <p style={{fontSize: '17px'}} className="">Sam - Dim : 8h00 - 16h00</p>
      </div>

      {/* Contact */}
      <div ref={contactRef} className="col-md-3">
        <h5 className="text-uppercase fw-bold mb-3 text-dark">Contact</h5>
        <ul className="list-unstyled " style={{fontSize: '17px'}}>
          <li className="mb-2">
            <i className="bi bi-geo-alt-fill me-2"></i>
            123 Parental Coach Street, City, Country
          </li>
          <li className="mb-2">
            <i className="bi bi-envelope-fill me-2"></i>
            info@imacoachpro.com
          </li>
          <li>
            <i className="bi bi-phone-fill me-2"></i>
            +1 234 567 8900
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="mt-3 d-flex gap-3">
          <a href="#" className="text-light" aria-label="Facebook">
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a href="#" className="text-light" aria-label="Twitter">
            <i className="bi bi-twitter fs-5"></i>
          </a>
          <a href="#" className="text-light" aria-label="Instagram">
            <i className="bi bi-instagram fs-5"></i>
          </a>
          <a href="#" className="text-light" aria-label="LinkedIn">
            <i className="bi bi-linkedin fs-5"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Bas de page */}
  <div className=" text-center text-white py-3 " style={{background: "var(--clr-pumpkinDark)", fontSize: "20px"}}>
    <small>© 2023 ImacoachPro. Tous droits réservés.</small>
  </div>

  {/* Bouton retour haut */}
  <button
    type="button"
    className="btn rounded-circle position-fixed bottom-0 end-0 m-4 shadow fs-3"
    style={{ zIndex: 1000,background: 'var(--clr-pumpkinDark)' }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Retour en haut"
  >
     <img src={iconsImgs.plane} alt=""/>
  </button>
</footer>

  );
};

export default Footer;
