import { Link } from "react-router-dom";
import { useDrinkContext } from "../context/DrinkContext";
import "../styles/Favorites.css";

export default function Favorites() {
  const { favoriteDrinks, removeFavorite } = useDrinkContext();

  return (
    <div className="favorites-page">
      <div className="favorites-box">
        <h1>My Top Favorites</h1>

        {favoriteDrinks.length === 0 ? (
          <div className="favorites-card">
            <div className="heart-icon">♡</div>

            <h2>No favorites yet</h2>

            <p>
              Go to the menu and click the heart icon to save your favorite
              drinks.
            </p>

            <Link to="/menu" className="explore-btn">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoriteDrinks.map((drink) => (
              <div className="favorite-drink-card" key={drink.id}>
                <img src={drink.image} alt={drink.name} />

                <div className="favorite-info">
                  <h2>{drink.name}</h2>
                  <p>{drink.category}</p>

                  <Link to={`/drink/${drink.id}`} className="details-btn">
                    View Details
                  </Link>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeFavorite(drink.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}