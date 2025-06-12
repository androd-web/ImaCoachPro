import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../Components/Footer";
import "../assets/style/Cards.css";
import { imageCoach, logoCoach } from "../utils/ImageCoach";
import ServicesSlider from "../Components/ServicesSlider";
import { Link } from "react-router-dom";

const Home = () => {
  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);
  const approachRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        // opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });
    }

    if (partnersRef.current) {
      gsap.from(partnersRef.current, {
        // opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
      });
    }

    if (servicesRef.current) {
      gsap.from(servicesRef.current, {
        // opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
      });
    }

    if (cardsRef.current.length > 0) {
      gsap.from(cardsRef.current, {
        // opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.9,
        stagger: 0.2,
      });
    }

    if (approachRef.current) {
      gsap.from(approachRef.current, {
        // opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.2,
      });
    }
  }, []);

  return (
    <div>
      {/* Héro Section */}
      <section ref={heroRef} className="bg-light py-5 ">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">
                Être maman. Choisir ta famille. {" "}
                <span className="" style={{ color: "var(--clr-pumpkin)" }}>
                  Vivre dans la joie.
                </span>
              </h1>
              <p className="lead text-muted mb-4">
               Parce que tu mérites de te sentir stable, de vivre avec foi – et de vivre ta maternité avec sérénité, amour et plaisir, à ton propre rythme. <br /> Chez <span style={{ color: "var(--clr-pumpkin)" }}>IMA votre agence de coaching parentale</span> nous avons :
            <br />-plus 12 communautés partenaires,  <br />- des coachs certifiées,  <br />- plus 100 mamans accompagnées

              </p>
              <Link to="/services"><button
                className="btn fw-bold text-white text-uppercase"
                style={{ background: "var(--clr-pumpkinDark)" }}
              >
                en savoir plus
              </button></Link>
              
            </div>
            <div className="col-md-6 text-end">
              <img
                src={imageCoach.coach_one}
                alt="Coach Image"
                className="img-fluid card"
                style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section
        ref={partnersRef}
        className=" text-white py-3"
        style={{ background: "var(--clr-pumpkinDark)" }}
      >
        <div className="container text-center text-uppercase">
          <h5>Vous Avez Surement Entendue Parler de Nous sur :</h5>
          <div className="d-flex justify-content-evenly gap-3 mt-3">
            <img
              src={logoCoach.logIma}
              alt="Star"
              className="img-fluid card  rounded-pill"
              style={{ width: "100px", height: "70px" }}
            />
            <img
              src={logoCoach.logIma5}
              alt="Science"
              className="img-fluid card rounded-pill"
              style={{ width: "100px", height: "70px"  }}
            />
            <img
              src={logoCoach.logIma4}
              alt="Daily"
              className="img-fluid card rounded-pill"
              style={{ width: "100px", height: "70px"  }}
            />
            <img
              src={logoCoach.logIma3}
              alt="TechTV"
              className="img-fluid card rounded-pill"
              style={{ width: "100px", height: "70px"  }}
            />
            <img
              src={logoCoach.logIma2}
              alt="Alerto"
              className="img-fluid card rounded-pill"
              style={{ width: "100px", height: "70px" }}
            />
            <img
              src={logoCoach.logIma1}
              alt="Press"
              className="img-fluid card rounded-pill"
              style={{ width: "100px", height: "70px"  }}
            />
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section ref={servicesRef} className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ color: 'var(--clr-pumpkin)'}}>Être maman n’a jamais été aussi exigeant.</h2>
              <p className="lead text-muted mb-4">
                Parfois, être maman ressemble à une mission impossible. Tu donnes tout – et pourtant tu te demandes pourquoi c’est si difficile. Où est l’autorité ? Où est la paix ? Peut-être le plus douloureux : ce sentiment d’être seule. <br />👉 Tu n’es pas seule. Bienvenue chez IMA – une communauté féminine qui te reconnecte à ton essence de maman.

              </p>
              <Link to="/contact"> <button className="btn fw-bold text-white text-uppercase"  style={{ background: "var(--clr-pumpkinDark)" }}>en savoir plus</button></Link>
             
            </div>
            <div className="col-md-6">
              <img
                src={imageCoach.coach_three} 
                alt="Coaching Session"
                className="img-fluid card" style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés slider*/}
       
      <ServicesSlider />
      {/* Approche de coaching */}
      <section ref={approachRef} className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center my-4"  style={{ color: "var(--clr-pumpkin)" }}>Approche de coaching</h1>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="var(--clr-pumpkin)"
                      className="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2h14v2H1V2zm0 3h14v2H1V5zm0 3h14v2H1v-2zm0 3h14v2H1v-2zM1 13h14v2H1v-2z" />
                    </svg>
                    <h5 className="ms-2">Coaching individuel</h5>
                  </div>
                  <p className="card-text text-muted">
                    Un accompagnement sur-mesure :
Une séance pour identifier tes blocages, y voir clair et repartir avec des outils concrets.

                  </p>
                  <Link to="/services"><button className="btn text-white" style={{background: 'var(--clr-pumpkinDark)'}}>ENCORE PLUS</button></Link>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="var(--clr-pumpkin)"
                      className="bi bi-play-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M11 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm-.5 2.45l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.146-2.147a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <h5 className="ms-2">Coaching de groupe</h5>
                  </div>
                  <p className="card-text text-muted">
                   Grandir ensemble :
Dans un groupe bienveillant, avance avec d’autres femmes sur les mêmes thématiques.

                  </p>
                  <Link to="/services"><button className="btn text-white" style={{background: 'var(--clr-pumpkinDark)'}}>ENCORE PLUS</button></Link>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="var(--clr-pumpkin)"
                      className="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" />
                    </svg>
                    <h5 className="ms-2">Conférences et ateliers</h5>
                  </div>
                  <p className="card-text text-muted">
                   Pour les communautés & événements:
Organise un événement IMA chez toi ou dans ton centre. En ligne ou en présentiel, avec profondeur et douceur.

                  </p>
                  <Link to="/services"> <button className="btn text-white" style={{background: 'var(--clr-pumpkinDark)'}}>ENCORE PLUS</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={approachRef} className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ color: 'var(--clr-pumpkin)'}}>Témoignages ou appel à l'action, Prête à transformer ta maternité ?
</h2>
              <p className="lead text-muted mb-4">
               Découvre nos formations, prends rendez-vous pour un coaching personnel ou rejoins l’un de nos groupes. Le changement commence maintenant.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={imageCoach.coach_five} 
                alt="Counseling Session"
                className="img-fluid card"style={{borderRadius: '10%'}}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
