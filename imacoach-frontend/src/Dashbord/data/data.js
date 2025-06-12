 // ✅ Importation des icônes et images des utilisateurs
import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images"; // (non utilisé ici, mais conservé si utile ailleurs)

// ✅ Liens de navigation latérale
export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    image: iconsImgs.home,
    path: "/",
  },
  {
    id: 2,
    title: "Budget",
    image: iconsImgs.budget,
    path: "/budget",
  },
  {
    id: 3,
    title: "Transactions",
    image: iconsImgs.plane,
    path: "/transactions",
  },
  {
    id: 4,
    title: "Subscriptions",
    image: iconsImgs.wallet,
    path: "/subscriptions",
  },
  {
    id: 5,
    title: "Loans",
    image: iconsImgs.bills,
    path: "/loans",
  },
  {
    id: 6,
    title: "Reports",
    image: iconsImgs.report,
    path: "/reports",
  },
  {
    id: 7,
    title: "Savings",
    image: iconsImgs.wallet,
    path: "/savings",
  },
  {
    id: 8,
    title: "Financial Advice",
    image: iconsImgs.wealth,
    path: "/financial-consultations",
  },
  {
    id: 9,
    title: "Account",
    image: iconsImgs.user,
    path: "/account",
  },
  {
    id: 10,
    title: "Settings",
    image: iconsImgs.gears,
    path: "/settings",
  },
];

// ✅ Liste des transactions récentes
export const transactions = [
  {
    id: 1,
    name: "Achat Amazon",
    date: "2025-06-08",
    amount: 42.50,
    image: "/assets/images/amazon.png", // Assure-toi que l'image existe
  },
  {
    id: 2,
    name: "Paiement Uber",
    date: "2025-06-07",
    amount: 12.30,
    image: "/assets/images/uber.png",
  },
  {
    id: 3,
    name: "Facture électricité",
    date: "2025-06-05",
    amount: 98.00,
    image: "/assets/images/electricity.png",
  },
];

// ✅ Données de rapport (évolution par mois)
export const reportData = [
  {
    id: 14,
    month: "Jan",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "Feb",
    value1: 45,
    value2: 60,
  },
  {
    id: 16,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Apr",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "May",
    value1: 45,
    value2: null,
  },
];

// ✅ Budgets alloués à différentes dépenses
export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
];

// ✅ Liste des abonnements à payer
export const subscriptions = [
  {
    id: 1,
    title: "Spotify Premium",
    due_date: "2025-06-15",
    amount: 9.99,
  },
  {
    id: 2,
    title: "Netflix",
    due_date: "2025-06-20",
    amount: 13.99,
  },
  {
    id: 3,
    title: "Adobe Creative Cloud",
    due_date: "2025-06-25",
    amount: 19.99,
  },
];

// ✅ Épargnes enregistrées par l'utilisateur
export const savings = [
  {
    id: 1,
    title: "Épargne voyage",
    saving_amount: 1000,
    amount_left: 300,
    date_taken: "2025-01-10",
  },
  {
    id: 2,
    title: "Projet auto",
    saving_amount: 5000,
    amount_left: 1500,
    date_taken: "2025-03-12",
  },
  {
    id: 3,
    title: "Investissement",
    saving_amount: 2000,
    amount_left: 800,
    date_taken: "2025-04-05",
  },
];
