import { createContext, useContext, useEffect, useMemo, useState } from "react";
import defaultDrinks from "../data/drinks";
import fallbackImage from "../assets/coffee.jpg";

const DrinkContext = createContext();

function loadFromStorage(key, fallbackValue) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function DrinkProvider({ children }) {
  const [favoriteDrinks, setFavoriteDrinks] = useState(() =>
    loadFromStorage("favoriteDrinks", [])
  );

  const [customRecipes, setCustomRecipes] = useState(() =>
    loadFromStorage("customRecipes", [])
  );

  useEffect(() => {
    localStorage.setItem("favoriteDrinks", JSON.stringify(favoriteDrinks));
  }, [favoriteDrinks]);

  useEffect(() => {
    localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
  }, [customRecipes]);

  const allDrinks = useMemo(() => {
    return [...defaultDrinks, ...customRecipes];
  }, [customRecipes]);

  const isFavorite = (id) => {
    return favoriteDrinks.some((drink) => String(drink.id) === String(id));
  };

  const toggleFavorite = (drink) => {
    setFavoriteDrinks((prevFavorites) => {
      const alreadySaved = prevFavorites.some(
        (item) => String(item.id) === String(drink.id)
      );

      if (alreadySaved) {
        return prevFavorites.filter(
          (item) => String(item.id) !== String(drink.id)
        );
      }

      return [...prevFavorites, drink];
    });
  };

  const removeFavorite = (id) => {
    setFavoriteDrinks((prevFavorites) =>
      prevFavorites.filter((drink) => String(drink.id) !== String(id))
    );
  };

  const addCustomRecipe = (recipe) => {
    const newRecipe = {
      id: `custom-${Date.now()}`,
      name: recipe.name.trim(),
      category: recipe.category,
      image: recipe.image.trim() || fallbackImage,
      description:
        recipe.description.trim() ||
        "A custom recipe added by the user.",
      ingredients: recipe.ingredients
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter(Boolean),
      steps: recipe.steps
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter(Boolean),
      isCustom: true,
    };

    setCustomRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
  };

  const deleteCustomRecipe = (id) => {
    setCustomRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => String(recipe.id) !== String(id))
    );

    setFavoriteDrinks((prevFavorites) =>
      prevFavorites.filter((drink) => String(drink.id) !== String(id))
    );
  };

  const value = {
    allDrinks,
    customRecipes,
    favoriteDrinks,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    addCustomRecipe,
    deleteCustomRecipe,
  };

  return (
    <DrinkContext.Provider value={value}>
      {children}
    </DrinkContext.Provider>
  );
}

export function useDrinkContext() {
  const context = useContext(DrinkContext);

  if (!context) {
    throw new Error("useDrinkContext must be used inside DrinkProvider");
  }

  return context;
}