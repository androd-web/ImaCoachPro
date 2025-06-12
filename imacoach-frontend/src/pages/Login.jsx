//  import React, { useState, useEffect, useRef } from "react";  
// import { gsap } from "gsap";
// import Footer from "../Components/Footer";

// const Login = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showRegister, setShowRegister] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);

//   // États séparés inscription
//   const [registerName, setRegisterName] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   // États séparés connexion
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const headerRef = useRef(null);
//   const formContainerRef = useRef(null);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setIsAuthenticated(true);
//     }

//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 1.2,
//       ease: "power3.out",
//       clearProps: "all",
//     });
//   }, []);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Sauvegarde de l'utilisateur (sans mot de passe pour sécurité)
//     localStorage.setItem(
//       "user",
//       JSON.stringify({ name: registerName, email: registerEmail })
//     );
//     setIsAuthenticated(true);
//     gsap.to(formContainerRef.current, {
//       opacity: 0,
//       y: -30,
//       duration: 0.6,
//       onComplete: () => setShowRegister(false),
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser && storedUser.email === loginEmail && loginPassword) {
//       setIsAuthenticated(true);
//       gsap.to(formContainerRef.current, {
//         // opacity: 0,
//         // y: -30,
//         // duration: 0.6,
//         onComplete: () => setShowLogin(false),
//       });
//     } else {
//       alert("Email ou mot de passe incorrect.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     setShowRegister(true);
//     setShowLogin(false);
//   };

//   return (
//     <div>
//       <section
//         ref={formContainerRef}
//         className="py-5 bg-light min-vh-100 d-flex align-items-center"
//       >
//         <div className="container">
//           {!isAuthenticated && showRegister && (
//             <div className="row justify-content-center">
//               <div className="col-md-6">
//                 <div className="card shadow-sm p-4">
//                   <h2 ref={headerRef} className="text-center mb-4">
//                     S'inscrire
//                   </h2>
//                   <form onSubmit={handleRegister}>
//                     <div className="mb-3">
//                       <label htmlFor="registerName" className="form-label">
//                         Nom
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="registerName"
//                         value={registerName}
//                         onChange={(e) => setRegisterName(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="registerEmail" className="form-label">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="registerEmail"
//                         value={registerEmail}
//                         onChange={(e) => setRegisterEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="registerPassword" className="form-label">
//                         Mot de passe
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="registerPassword"
//                         value={registerPassword}
//                         onChange={(e) => setRegisterPassword(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">
//                       S'inscrire
//                     </button>
//                     <p className="mt-3 text-center">
//                       <button
//                         type="button"
//                         className="btn btn-link"
//                         onClick={() => {
//                           setShowRegister(false);
//                           setShowLogin(true);
//                         }}
//                       >
//                         Déjà inscrit ? Se connecter
//                       </button>
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}

//           {!isAuthenticated && showLogin && (
//             <div className="row justify-content-center">
//               <div className="col-md-6">
//                 <div className="card shadow-sm p-4">
//                   <h2 className="text-center mb-4">Se connecter</h2>
//                   <form onSubmit={handleLogin}>
//                     <div className="mb-3">
//                       <label htmlFor="loginEmail" className="form-label">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="loginEmail"
//                         value={loginEmail}
//                         onChange={(e) => setLoginEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="loginPassword" className="form-label">
//                         Mot de passe
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="loginPassword"
//                         value={loginPassword}
//                         onChange={(e) => setLoginPassword(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100">
//                       Connexion
//                     </button>
//                     <p className="mt-3 text-center">
//                       <button
//                         type="button"
//                         className="btn btn-link"
//                         onClick={() => {
//                           setShowLogin(false);
//                           setShowRegister(true);
//                         }}
//                       >
//                         Pas encore inscrit ? S'inscrire
//                       </button>
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}

//           {isAuthenticated && (
//             <div className="row justify-content-center">
//               <div className="col-md-6 text-center">
//                 <h3 className="text-success mb-4">
//                   Bienvenue ! Vous êtes connecté. Commencer votre Navigation securiser
//                 </h3>
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleLogout}
//                 >
//                   Se déconnecter
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Login;



import React from 'react'; 
import Footer from "../Components/Footer"
import MaintenancePage from '../Components/MaintenancePage';

const Login = () => {
  return (
    <div> 
      <MaintenancePage/>
      <Footer />
    </div>
  );
};

export default Login;