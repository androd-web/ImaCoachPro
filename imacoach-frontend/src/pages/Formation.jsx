// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Navbar from "../Components/Navbar";


// const Formation = () => {
//   const heroRef = useRef(null);
//   const cardsRef = useRef([]);
//   const teamRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Données des formations
//   const formations = [
//     {
//       id: 1,
//       title: "Parentalité Positive",
//       description: "Apprenez à éduquer vos enfants avec bienveillance et fermeté.",
//       sessions: 10,
//       price: 420,
//     },
//     {
//       id: 2,
//       title: "Ima Café",
//       description: "Ateliers conviviaux autour de la parentalité dans un cadre détendu.",
//       sessions: 6,
//       price: 250,
//     },
//     {
//       id: 3,
//       title: "Gestion des Émotions",
//       description: "Apprendre à gérer ses émotions et celles de ses enfants.",
//       sessions: 8,
//       price: 300,
//     },
//     {
//       id: 4,
//       title: "Communication Non-Violente",
//       description: "Techniques de communication respectueuses pour toute la famille.",
//       sessions: 7,
//       price: 280,
//     },
//     {
//       id: 5,
//       title: "École à la Maison",
//       description: "Initiation aux méthodes d’apprentissage alternatives à domicile.",
//       sessions: 9,
//       price: 350,
//     },
//     {
//       id: 6,
//       title: "Confiance en Soi des Enfants",
//       description: "Aider votre enfant à développer son autonomie et sa confiance.",
//       sessions: 5,
//       price: 200,
//     },
//   ];

//   // Animation GSAP pour chaque section
//   useEffect(() => {
//     if (heroRef.current) {
//       gsap.from(heroRef.current, {
//         // opacity: 0.9,
//         y: 20,
//         duration: 1,
//         ease: "power3.out",
//         clearPropos: "all",
//       });
//     }

//     if (cardsRef.current) {
//       gsap.from(cardsRef.current, {
//         // opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.1,
//       });
//     }

//     if (teamRef.current) {
//       gsap.from(teamRef.current, {
//         // opacity: 0,
//         x: -50,
//         duration: 1,
//         stagger: 0.1,
//       });
//     }

//     if (testimonialsRef.current) {
//       gsap.from(testimonialsRef.current, {
//         // opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.1,
//       });
//     }

//     if (contactRef.current) {
//       gsap.from(contactRef.current, {
//         // opacity: 0,
//         y: 50,
//         duration: 1,
//       });
//     }
//   }, []);

//   return (
//     <div>
//       {/* <Navbar /> */}
//       {/* Héro Section */}
//       <section ref={heroRef} className="bg-dark text-white py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h1 className="display-4 fw-bold mb-3">Découvrez nos formations exclusives</h1>
//               <p className="lead mb-4">
//                 Notre équipe de coaches expérimentés vous accompagne dans votre transformation parentale.
//               </p>
//               <button className="btn btn-light">En savoir plus</button>
//             </div>
//             <div className="col-md-6 text-end">
//               <img src="https://via.placeholder.com/300x400?text=Coach+Image" alt="Coach Image" className="img-fluid rounded-circle" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Formations */}
//       <section ref={cardsRef} className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-5">Nos formations</h2>
//           <div className="row g-4">
//             {formations.map((formation) => (
//               <div key={formation.id} className="col-md-4">
//                 <div className="card h-100 shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">{formation.title}</h5>
//                     <p className="card-text text-muted">{formation.description}</p>
//                     <p className="mb-2">
//                       <strong>Sessions :</strong> {formation.sessions}
//                     </p>
//                     <p className="mb-3">
//                       <strong>Prix :</strong> {formation.price}$
//                     </p>
//                     <button className="btn btn-primary w-100">S'inscrire</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Équipe de formateurs */}
//       <section ref={teamRef} className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">Notre équipe de formateurs</h2>
//           <div className="row g-4 justify-content-center">
//             <div className="col-md-2">
//               <div className="card h-100 shadow-sm">
//                 <img src="https://via.placeholder.com/150x150?text=Coach+1" alt="Coach 1" className="card-img-top" />
//                 <div className="card-body text-center">
//                   <h5>Dr. Jean Dupont</h5>
//                   <p>Coach Parental</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div className="card h-100 shadow-sm">
//                 <img src="https://via.placeholder.com/150x150?text=Coach+2" alt="Coach 2" className="card-img-top" />
//                 <div className="card-body text-center">
//                   <h5>Mme Marie Martin</h5>
//                   <p>Coach Familial</p>
//                 </div>
//               </div>
//             </div>
//             {/* Ajoute ici les autres formateurs */}
//           </div>
//         </div>
//       </section>

//       {/* Témoignages */}
//       <section ref={testimonialsRef} className="py-5 bg-dark text-white">
//         <div className="container">
//           <h2 className="text-center mb-5">Ce que disent nos clients</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm bg-transparent border-0">
//                 <div className="card-body">
//                   <p className="card-text">
//                     "Les formations d'ImacoachPro ont changé ma vie !"
//                   </p>
//                   <p className="fw-bold">Jean Dupont, Parent</p>
//                 </div>
//               </div>
//             </div>
//             {/* Ajoute ici les autres témoignages */}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section ref={contactRef} className="py-5 bg-light">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h2>Contactez-nous</h2>
//               <p>Téléphone : 01 23 45 67 89</p>
//               <p>Email : contact@imacoachpro.com</p>
//             </div>
//             <div className="col-md-6">
//               <img src="https://via.placeholder.com/400x300?text=Carte+Google" alt="Carte Google" className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Formation;

import React from 'react'; 
import Footer from "../Components/Footer"
import MaintenancePage from '../Components/MaintenancePage';


const Formation = () => {
  return (
    <div> 
      <MaintenancePage/>
      <Footer />
    </div>
  );
};

export default Formation;
