import { useState } from "react";
import { useDrinkContext } from "../context/DrinkContext";
import "../styles/Recipe.css";

export default function AddRecipe() {
  const { customRecipes, addCustomRecipe, deleteCustomRecipe } = useDrinkContext();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !category.trim()) return;

    addCustomRecipe({
      name,
      category,
      image,
      description,
      ingredients,
      steps,
    });

    setName("");
    setCategory("");
    setIngredients("");
    setSteps("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="recipe-page">
      <div className="recipe-hero">
        <h1>Add More Recipe</h1>
        <p>Create and save your own custom drink recipes.</p>
      </div>

      <div className="recipe-layout">
        {/* FORM */}
        <div className="recipe-form">
          <h2>New Recipe</h2>

          <label>Drink name</label>
          <input
            type="text"
            placeholder="e.g. Iced Caramel Latte"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Category</label>
          <input
            type="text"
            placeholder="Coffee / Tea / Frappe"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label>Ingredients (one per line)</label>
          <textarea
            placeholder={"200ml milk\n2 shots espresso\nCaramel syrup"}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <label>Instructions (one step per line)</label>
          <textarea
            placeholder={"Brew espresso\nSteam the milk\nCombine and add syrup"}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />

          <label>Image URL</label>
          <input
            type="url"
            placeholder="https://example.com/photo.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button onClick={handleAdd}>Add Recipe</button>
        </div>

        {/* LIVE PREVIEW */}
        <div className="recipe-preview">
          <h2>Preview</h2>
          <div className="preview-card">
            {image && <img src={image} alt={name || "preview"} />}
            {category && <span>{category}</span>}
            <h3>{name || "Recipe name"}</h3>
            <h4>Ingredients</h4>
            <p>{ingredients || "Nothing yet"}</p>
            <h4>Instructions</h4>
            <p>{steps || "Nothing yet"}</p>
          </div>
        </div>
      </div>

      {/* SAVED RECIPES */}
      <div className="my-recipes-section">
        <h2>My Recipes</h2>
        {customRecipes.length === 0 ? (
          <p className="no-custom-recipes">No recipes yet</p>
        ) : (
          <div className="custom-recipe-grid">
            {customRecipes.map((r) => (
              <div key={r.id} className="custom-recipe-card">
                {r.image && <img src={r.image} alt={r.name} />}
                <div className="custom-recipe-info">
                  <span>{r.category}</span>
                  <h3>{r.name}</h3>
                  <p>{r.ingredients?.join(", ")}</p>
                  <div className="custom-recipe-actions">
                    <button onClick={() => deleteCustomRecipe(r.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}