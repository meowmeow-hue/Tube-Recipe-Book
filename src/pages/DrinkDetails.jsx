import { useParams, Link } from "react-router-dom";
import { useDrinkContext } from "../context/DrinkContext";
import "../styles/DrinkDetail.css";

export default function DrinkDetails() {
  const { id } = useParams();
  const { allDrinks } = useDrinkContext();

  const drink = allDrinks.find((item) => String(item.id) === String(id));

  if (!drink) {
    return (
      <div className="detail-page">
        <h2>Drink not found</h2>
        <Link to="/menu" className="back-link">
          ← Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/menu" className="back-link">
        ← Back to Menu
      </Link>

      <div className="detail-card">
        <img src={drink.image} alt={drink.name} className="detail-image" />

        <div className="detail-info">
          <span className="detail-category">{drink.category}</span>

          <h1>{drink.name}</h1>

          <p className="detail-description">
            {drink.description ||
              "A delicious handcrafted drink made with quality ingredients."}
          </p>

          {drink.ingredients && drink.ingredients.length > 0 && (
            <>
              <h3>Ingredients</h3>
              <ul className="ingredient-list">
                {drink.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}

          {drink.steps && drink.steps.length > 0 && (
            <>
              <h3>Instructions</h3>
              <ol className="steps-list">
                {drink.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
}