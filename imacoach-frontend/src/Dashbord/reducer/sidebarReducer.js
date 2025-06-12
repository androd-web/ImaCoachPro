 // Fonction reducer pour gérer l'état de la sidebar
const sidebarReducer = (state, action) => {
  // Action : basculer l'état ouvert/fermé de la sidebar
  if (action.type === "TOGGLE_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    };
  }

  // Si le type d'action ne correspond à rien
  throw new Error(`Aucune action correspondante pour le type "${action.type}"`);
};

export default sidebarReducer;
