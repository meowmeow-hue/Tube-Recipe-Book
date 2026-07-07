import { useParams, Link } from "react-router-dom";
import drinks from "../data/drinks";
import "../styles/DrinkDetail.css";

export default function DrinkDetail() {
  const { id } = useParams();
  const drink = drinks.find((d) => d.id === Number(id));

  if (!drink) {
    return (
      <div className="detail-page">
        <h2>Drink not found</h2>
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/menu" className="back-link">← Back to Menu</Link>

      <div className="detail-card">
        <img src={drink.image} alt={drink.name} className="detail-image" />

        <div className="detail-info">
          <span className="detail-category">{drink.category}</span>
          <h1>{drink.name}</h1>

          <p className="detail-description">
            {drink.description ||
              "A delicious handcrafted drink made with quality ingredients."}
          </p>

          {drink.ingredients && (
            <>
              <h3>Ingredients</h3>
              <ul className="ingredient-list">
                {drink.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          {drink.steps && (
            <>
              <h3>Instructions</h3>
              <ol className="steps-list">
                {drink.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
}