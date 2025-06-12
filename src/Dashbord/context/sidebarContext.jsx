 import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from 'prop-types';

// État initial de la sidebar (fermée par défaut)
const initialState = {
    isSidebarOpen: false
}

// Création du contexte
export const SidebarContext = createContext({});

// Provider qui enveloppe l'application pour partager l'état de la sidebar
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fonction pour basculer l'état ouvert/fermé
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    return (
        <SidebarContext.Provider value={{
            ...state,         // isSidebarOpen
            toggleSidebar     // fonction pour changer l'état
        }}>
            {children}
        </SidebarContext.Provider>
    );
};

// Validation des props pour s'assurer que 'children' est bien un élément React
SidebarProvider.propTypes = {
    children: PropTypes.node.isRequired
};
