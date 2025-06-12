//  import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap"; 
// import Footer from "../Components/Footer";

// const Contact = () => {
//   const [activeQuestion, setActiveQuestion] = useState(1);
//   const faqRefs = useRef([]);

//   // Animation ouverture/fermeture FAQ
//   useEffect(() => {
//     faqRefs.current.forEach((el, i) => {
//       if (!el) return;
//       if (i + 1 === activeQuestion) {
//         gsap.to(el, {
//           height: "auto",
//           duration: 0.5,
//           ease: "power3.out",
//           paddingTop: 15,
//           paddingBottom: 15,
//           opacity: 1,
//           overflow: "visible",
//         });
//       } else {
//         gsap.to(el, {
//           height: 0,
//           duration: 0.5,
//           ease: "power3.in",
//           paddingTop: 0,
//           paddingBottom: 0,
//           opacity: 0,
//           overflow: "hidden",
//         });
//       }
//     });
//   }, [activeQuestion]);

//   const toggleFAQ = (id) => {
//     setActiveQuestion((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div> 

//       {/* Section Contact - Formulaire et Bloc Contact */}
//       <section className="container py-5">
//         <div className="row g-5">
//           {/* Formulaire */}
//           <div className="col-lg-6">
//             <h2 className="mb-4">Contactez-nous</h2>
//             <form className="p-4 border rounded shadow-sm">
//               <div className="mb-3">
//                 <label htmlFor="firstName" className="form-label">
//                   First Name <span className="text-danger">*</span>
//                 </label>
//                 <input type="text" id="firstName" className="form-control" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="lastName" className="form-label">
//                   Last Name <span className="text-danger">*</span>
//                 </label>
//                 <input type="text" id="lastName" className="form-control" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="businessEmail" className="form-label">
//                   Business Email <span className="text-danger">*</span>
//                 </label>
//                 <input type="email" id="businessEmail" className="form-control" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">
//                   Phone Number <span className="text-danger">*</span>
//                 </label>
//                 <input type="tel" id="phoneNumber" className="form-control" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="companyName" className="form-label">
//                   Company Name <span className="text-danger">*</span>
//                 </label>
//                 <input type="text" id="companyName" className="form-control" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="numberEmployees" className="form-label">
//                   Number Of Employees <span className="text-danger">*</span>
//                 </label>
//                 <select id="numberEmployees" className="form-select" required>
//                   <option value="">Sélectionnez</option>
//                   <option value="Self-employed">Self-employed</option>
//                   <option value="1-10">1-10</option>
//                   <option value="11-50">11-50</option>
//                   <option value="51-200">51-200</option>
//                   <option value="201-500">201-500</option>
//                   <option value="500+">500+</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="country" className="form-label">
//                   Country (Optional)
//                 </label>
//                 <input type="text" id="country" className="form-control" />
//               </div>
//               <button
//                 type="submit"
//                 className="btn w-100"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #d6336c 0%, #6f42c1 100%)",
//                   color: "#fff",
//                   fontWeight: "600",
//                 }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Bloc Contact */}
//           <div className="col-lg-6">
//             <h2>Get in Touch!</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
//               aliquet, sapien nec commodo commodo, nisi nisl lacinia mi, eget
//               convallis enim magna eget velit.
//             </p>
//             <ul className="list-unstyled fs-5">
//               <li className="mb-3 d-flex align-items-center">
//                 <i className="bi bi-envelope-fill me-3" />
//                 <a href="mailto:sale@finwise.com" className="text-decoration-none">
//                   sale@finwise.com
//                 </a>
//               </li>
//               <li className="mb-3 d-flex align-items-center">
//                 <i className="bi bi-telephone-fill me-3" />
//                 +1 332 207 8097
//               </li>
//               <li className="mb-3 d-flex align-items-center">
//                 <i className="bi bi-geo-alt-fill me-3" />
//                 <a
//                   href="https://goo.gl/maps/6P1XkWbryML2"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-decoration-none"
//                 >
//                   Ave Oakland, California - 94609, USA
//                 </a>
//               </li>
//               <li className="mb-3 d-flex align-items-center">
//                 <i className="bi bi-person-badge-fill me-3" />
//                 <a href="mailto:career@finwise.com" className="text-decoration-none">
//                   career@finwise.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Section FAQ */}
//       <section className="container py-5 bg-light rounded shadow-sm">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="mb-0">General Questions.</h2>
//           <button className="btn btn-outline-primary">READ FAQ</button>
//         </div>

//         <div className="accordion" id="faqAccordion">
//           {[{
//             id: 1,
//             question: "What makes Finwise different?",
//             answer:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           },
//           {
//             id: 2,
//             question: "How does Finwise make money?",
//             answer:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           },
//           {
//             id: 3,
//             question: "Why should I trust Finwise?",
//             answer:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           },
//           {
//             id: 4,
//             question: "How does Finwise work?",
//             answer:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           }].map(({ id, question, answer }) => (
//             <div className="accordion-item" key={id}>
//               <h2 className="accordion-header" id={`heading${id}`}>
//                 <button
//                   className={`accordion-button ${activeQuestion === id ? "" : "collapsed"}`}
//                   type="button"
//                   onClick={() => toggleFAQ(id)}
//                   aria-expanded={activeQuestion === id}
//                   aria-controls={`collapse${id}`}
//                 >
//                   Q. {question}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${id}`}
//                 className={`accordion-collapse collapse ${activeQuestion === id ? "show" : ""}`}
//                 ref={(el) => (faqRefs.current[id] = el)}
//                 aria-labelledby={`heading${id}`}
//                 data-bs-parent="#faqAccordion"
//                 style={{ overflow: "hidden" }}
//               >
//                 <div className="accordion-body">{answer}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React from 'react'; 
import Footer from "../Components/Footer"
import MaintenancePage from '../Components/MaintenancePage';

const Contact = () => {
  return (
    <div> 
      <MaintenancePage/>
      <Footer />
    </div>
  );
};

export default Contact;
