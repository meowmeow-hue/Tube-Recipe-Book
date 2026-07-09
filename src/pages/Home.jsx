import { Link } from "react-router-dom";
import "../styles/Home.css";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div className="home">
      <HeroSlider />

      <h1> Welcome to Tube Coffee </h1>

      <p>
        Discover delicious coffee recipes from around the world.
        Browse our menu, save your favorite drinks, and even add your own
        creations. Whether you're a beginner or a coffee lover, you'll find
        something to enjoy.
      </p>

      <Link to="/menu">
        <button className="btn">Explore Menu</button>
      </Link>

      <section className="section">
        <h2>Featured Drinks</h2>

        <div className="card-container">
          <div className="card">
            <h3> Latte </h3>
            <p>Smooth espresso with steamed milk.</p>
          </div>

          <div className="card">
            <h3>Cappuccino</h3>
            <p>Rich espresso with creamy milk foam.</p>
          </div>

          <div className="card">
            <h3>Mocha</h3>
            <p>Chocolate and espresso combined.</p>
          </div>

          <div className="card">
            <h3>Iced Coffee</h3>
            <p>Cold, refreshing, and perfect for summer.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Choose Tube Coffee?</h2>

        <div className="card-container">
          <div className="card">
            <h3>Fresh Recipes</h3>
            <p>Made using simple ingredients you can find anywhere.</p>
          </div>

          <div className="card">
            <h3>Easy to Follow</h3>
            <p>Step-by-step instructions suitable for beginners.</p>
          </div>

          <div className="card">
            <h3>Student User-Friendly</h3>
            <p>Affordable recipes perfect for students on a budget.</p>
          </div>
        </div>
      </section>
    </div>
  );
}