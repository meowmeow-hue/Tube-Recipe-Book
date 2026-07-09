import { Link } from "react-router-dom";
import { useDrinkContext } from "../context/DrinkContext";

export default function DrinkCard({ drink }) {
  const { isFavorite, toggleFavorite } = useDrinkContext();
  const favorited = isFavorite(drink.id);

  return (
    <div className="drink-card">
      <div className="drink-image-box">
        <img src={drink.image} alt={drink.name} />

        <button
          type="button"
          className={`favorite-btn ${favorited ? "saved" : ""}`}
          onClick={() => toggleFavorite(drink)}
        >
          {favorited ? "♥" : "♡"}
        </button>
      </div>

      <div className="drink-info">
        <h3>{drink.name}</h3>
        <p>{drink.category}</p>

        <Link to={`/drink/${drink.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}