import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DrinkCard from "../components/DrinkCard";
import { useDrinkContext } from "../context/DrinkContext";

import "../styles/Menu.css";

export default function Menu() {
  const { allDrinks } = useDrinkContext();

  const [search, setSearch] = useState("");
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Coffee", "Tea & Refreshment", "Frappe"];

  const filteredDrinks = allDrinks.filter((drink) => {
    const matchesSearch = drink.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || drink.category === activeCategory;

    const matchesIngredient =
      ingredientSearch.trim() === "" ||
      drink.ingredients?.some((ingredient) =>
        ingredient.toLowerCase().includes(ingredientSearch.toLowerCase())
      );

    return matchesSearch && matchesCategory && matchesIngredient;
  });

  return (
    <div className="menu">
      <h1>Coffee Menu</h1>

      <p className="subtitle">
        Explore our delicious coffee recipes.
      </p>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="ingredient-filter">
        <input
          type="text"
          value={ingredientSearch}
          onChange={(e) => setIngredientSearch(e.target.value)}
          placeholder="Filter by ingredient, example: milk, honey, tea..."
        />
      </div>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="drink-grid">
        {filteredDrinks.length > 0 ? (
          filteredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))
        ) : (
          <p className="no-results">No drinks found.</p>
        )}
      </div>
    </div>
  );
}