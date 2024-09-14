import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

// Crear contexto
export const GlobalContext = createContext();

// Estado inicial
const initialState = {
  dentists: [],
  theme: "light", // Modo claro por defecto
  favorites: JSON.parse(localStorage.getItem("favDentists")) || [], // Favoritos desde localStorage
};

// Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_FAVORITE":
      const updatedFavoritesAdd = [...state.favorites, action.payload];
      localStorage.setItem("favDentists", JSON.stringify(updatedFavoritesAdd)); // Actualizar localStorage
      return { ...state, favorites: updatedFavoritesAdd };
    case "REMOVE_FAVORITE":
      const updatedFavoritesRemove = state.favorites.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favDentists", JSON.stringify(updatedFavoritesRemove)); // Actualizar localStorage
      return { ...state, favorites: updatedFavoritesRemove };
    default:
      return state;
  }
};

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Obtener datos de la API y actualizar el estado usando el dispatch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Métodos para cambiar el estado
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  // Manejo de favoritos
  const addFavorite = (dentist) => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist });
  };

  const removeFavorite = (dentist) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
  };

  return (
    <GlobalContext.Provider value={{ state, toggleTheme, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
};
