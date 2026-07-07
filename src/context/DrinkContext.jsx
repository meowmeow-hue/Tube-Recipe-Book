import { createContext, useContext, useState, useEffect } from "react";

const DrinkContext = createContext();

export function DrinkProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ADD favorite (no duplicates)
  const addFavorite = (drink) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === drink.id);
      if (exists) return prev;
      return [...prev, drink];
    });
  };

  // REMOVE favorite
  const removeFavorite = (id) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // TOGGLE favorite (best for ❤️ button)
  const toggleFavorite = (drink) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === drink.id);
      if (exists) {
        return prev.filter((item) => item.id !== drink.id);
      } else {
        return [...prev, drink];
      }
    });
  };

  return (
    <DrinkContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
}

export const useDrink = () => useContext(DrinkContext);