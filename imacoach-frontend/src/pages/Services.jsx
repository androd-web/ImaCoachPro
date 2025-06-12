// import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap"; 
// import Footer from "../Components/Footer";

// const Services = () => {
//   const cardsRef = useRef([]);
//   const contactSectionRef = useRef(null);

//   const services = [
//     {
//       id: 1,
//       title: "Coaching parental personnalisé",
//       description: "Séances en ligne adaptées à votre situation familiale.",
//       icon: "👤",
//     },
//     {
//       id: 2,
//       title: "Ateliers et conférences",
//       description: "Événements thématiques pour les parents, en présentiel ou en ligne.",
//       icon: "📚",
//     },
//     {
//       id: 3,
//       title: "Support WhatsApp et Suivi",
//       description: "Un accompagnement quotidien via un groupe WhatsApp dédié.",
//       icon: "📱",
//     },
//     {
//       id: 4,
//       title: "Programme d'accompagnement intensif",
//       description: "Suivi étroit pendant 6 mois pour résultats rapides.",
//       icon: "🎯",
//     },
//     {
//       id: 5,
//       title: "Consultations individuelles",
//       description: "Sessions privées pour des conseils sur mesure.",
//       icon: "📞",
//     },
//     {
//       id: 6,
//       title: "Livres et ressources numériques",
//       description: "Accès à notre bibliothèque de guides pratiques.",
//       icon: "📖",
//     },
//   ];

//   // useEffect(() => {
//   //   if (cardsRef.current.length > 0) {
//   //     gsap.from(cardsRef.current, {
//   //       opacity: 0,
//   //       y: 50,
//   //       duration: 1,
//   //       stagger: 0.2,
//   //       clearProps: "all",
//   //     });
//   //   }

//   //   if (contactSectionRef.current) {
//   //     gsap.from(contactSectionRef.current, {
//   //       opacity: 0,
//   //       y: 50,
//   //       duration: 1,
//   //       delay: 0.3,
//   //       clearProps: "all",
//   //     });
//   //   }
//   // }, []);

//   return (
//     <div> 

//       {/* Section principale */}
//       <section className="py-5 bg-light">
//         <div className="container text-center">
//           <h2>Notre gamme de services</h2>
//           <p className="lead mb-5">Découvrez nos solutions pour une parentalité épanouie.</p>
//         </div>
//       </section>

//       {/* Cartes des services */}
//       <section className="py-5">
//         <div className="container">
//           <div className="row g-4 justify-content-center">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className="col-md-4"
//                 ref={(el) => (cardsRef.current[index] = el)}
//               >
//                 <div className="card h-100 shadow-sm">
//                   <div className="card-body text-center">
//                     <span className="display-4 fw-bold">{service.icon}</span>
//                     <h5 className="card-title mt-3">{service.title}</h5>
//                     <p className="card-text text-muted">{service.description}</p>
//                     <a href="#" className="btn btn-primary mt-auto">
//                       En savoir plus
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section de contact final */}
//       <section ref={contactSectionRef} className="py-5 bg-dark text-white">
//         <div className="container text-center">
//           <h3>Vous souhaitez en savoir plus ?</h3>
//           <p className="lead mb-4">Contactez-nous pour plus d’informations.</p>
//           <a href="/contact" className="btn btn-light">
//             Nous contacter
//           </a>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Services;


import React from 'react'; 
import Footer from "../Components/Footer"
import MaintenancePage from '../Components/MaintenancePage';

const Services = () => {
  return (
    <div> 
      <MaintenancePage/>
      <Footer />
    </div>
  );
};

export default Services;
