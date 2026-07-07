import { useState, useEffect } from "react";

export default function AddRecipe() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = () => {
    if (!name || !category) return;

    const newRecipe = {
      id: Date.now(),
      name,
      category,
    };

    setRecipes([...recipes, newRecipe]);
    setName("");
    setCategory("");
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="recipe-container">
      <h1>Add Recipe</h1>

      {/* FORM */}
      <div className="recipe-form">
        <input
          type="text"
          placeholder="Drink name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category (Coffee / Tea / Frappe)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={addRecipe}>Add Recipe</button>
      </div>

      {/* LIST */}
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>No recipes yet</p>
        ) : (
          recipes.map((r) => (
            <div key={r.id} className="recipe-card">
              <h3>{r.name}</h3>
              <p>{r.category}</p>

              <button onClick={() => deleteRecipe(r.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}