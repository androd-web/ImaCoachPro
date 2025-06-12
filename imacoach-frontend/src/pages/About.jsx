//  import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const About = () => {
//   // Références pour chaque section à animer
//   const heroRef = useRef(null);
//   const statsRef = useRef(null);
//   const expertiseRef = useRef(null);
//   const reviewsRef = useRef(null);

//   // Animation GSAP au chargement du composant
//   useEffect(() => {
//     if (heroRef.current) {
//       gsap.from(heroRef.current, {
//         // opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: "power3.out",
//       });
//     }

//     if (statsRef.current) {
//       gsap.from(statsRef.current.children, {
//         // opacity: 0,
//         x: -50,
//         duration: 1,
//         stagger: 0.2,
//       });
//     }

//     if (expertiseRef.current) {
//       gsap.from(expertiseRef.current.querySelectorAll(".card"), {
//         // opacity: 0,
//         x: -50,
//         duration: 1,
//         stagger: 0.2,
//       });
//     }

//     if (reviewsRef.current) {
//       gsap.from(reviewsRef.current, {
//         // opacity: 0,
//         y: 50,
//         duration: 1,
//       });
//     }
//   }, []);

//   return (
//     <div>
//       {/* Section Héro */}
//       <section ref={heroRef} className="bg-light py-5">
//         <div className="container text-center">
//           <h1 className="mb-5">À propos de nous</h1>
//           <p className="lead text-muted mb-4">
//             Chez ImacoachPro, nous accompagnons les parents dans leur parcours éducatif et personnel.
//           </p>
//           <img
//             src="https://via.placeholder.com/800x400?text=ImacoachPro+Image"
//             alt="Équipe ImacoachPro"
//             className="img-fluid rounded shadow-sm"
//           />
//         </div>
//       </section>

//       {/* Section Statistiques */}
//       <section ref={statsRef} className="py-5 bg-dark text-white">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h2>Innovons ensemble pour une parentalité épanouie</h2>
//               <p>Notre mission est de vous accompagner dans votre transformation parentale.</p>
//             </div>
//             <div className="col-md-6 d-flex gap-3">
//               <div className="card bg-primary text-white p-3 flex-fill text-center">
//                 <h5>3.5K</h5>
//                 <p>Membres inscrits</p>
//               </div>
//               <div className="card bg-success text-white p-3 flex-fill text-center">
//                 <h5>1.2K</h5>
//                 <p>Formations suivies</p>
//               </div>
//               <div className="card bg-info text-white p-3 flex-fill text-center">
//                 <h5>50%</h5>
//                 <p>Satisfaction client</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Expertises */}
//       <section ref={expertiseRef} className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-5">Nos expertises</h2>
//           <div className="row g-4">
//             {/* Carte Coaching Parental */}
//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <div className="card-body d-flex align-items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     fill="currentColor"
//                     className="bi bi-person-fill me-3 flex-shrink-0"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 4 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm6 8a5 5 0 1 1-10 0A5 5 0 0 1 14 12Z" />
//                   </svg>
//                   <div>
//                     <h5>Coaching Parental</h5>
//                     <p className="text-muted">
//                       Accompagnement personnalisé pour une meilleure gestion familiale.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Carte Ateliers Thématiques */}
//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <div className="card-body d-flex align-items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     fill="currentColor"
//                     className="bi bi-book-fill me-3 flex-shrink-0"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M1 2h14v2H1V2zm0 3h14v2H1v-2zm0 3h14v2H1v-2zm0 3h14v2H1v-2zM1 12h14v2H1v-2z" />
//                   </svg>
//                   <div>
//                     <h5>Ateliers Thématiques</h5>
//                     <p className="text-muted">
//                       Sessions interactives pour approfondir des sujets spécifiques.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Carte Support WhatsApp */}
//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <div className="card-body d-flex align-items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     fill="currentColor"
//                     className="bi bi-chat-square-text me-3 flex-shrink-0"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM1 0H9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1-1V0H1z" />
//                     <path d="M11 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
//                   </svg>
//                   <div>
//                     <h5>Support WhatsApp</h5>
//                     <p className="text-muted">
//                       Un accompagnement quotidien via notre groupe WhatsApp dédié.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Avis clients */}
//       <section ref={reviewsRef} className="py-5 bg-dark text-white">
//         <div className="container">
//           <h2 className="text-center mb-5">Nos avis clients</h2>
//           <div className="row g-4 justify-content-center">
//             <div className="col-md-6">
//               <div className="card h-100 shadow-sm bg-transparent border-0">
//                 <div className="card-body">
//                   <p className="card-text fst-italic">
//                     "Les formations d'ImacoachPro ont changé ma vie !"
//                   </p>
//                   <p className="fw-bold mb-0">Jean Dupont, Parent</p>
//                 </div>
//               </div>
//             </div>
//             {/* Tu peux ajouter d'autres avis ici */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


import React from 'react'; 
import Footer from "../Components/Footer"
import MaintenancePage from '../Components/MaintenancePage';

const About = () => {
  return (
    <div> 
      <MaintenancePage/>
      <Footer />
    </div>
  );
};

export default About;
