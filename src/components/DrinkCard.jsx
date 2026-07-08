import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DrinkCard({ drink }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteDrinks")) || [];

    const alreadySaved = savedFavorites.some((item) => item.id === drink.id);
    setIsFavorite(alreadySaved);
  }, [drink.id]);

  const handleFavoriteClick = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteDrinks")) || [];

    if (isFavorite) {
      const updatedFavorites = savedFavorites.filter(
        (item) => item.id !== drink.id
      );

      localStorage.setItem("favoriteDrinks", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      const updatedFavorites = [...savedFavorites, drink];

      localStorage.setItem("favoriteDrinks", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="drink-card">
      <div className="drink-image-box">
        <img src={drink.image} alt={drink.name} />

        <button
          type="button"
          className={`favorite-btn ${isFavorite ? "saved" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "♥" : "♡"}
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