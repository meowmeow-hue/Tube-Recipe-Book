import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/favorites", label: "Favorites" },
    { to: "/add", label: "Recipe" },
    { to: "/about", label: "About" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Tube Coffee</h3>
          <p>Discover, save, and share your favorite coffee recipes.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>hello@tubecoffee.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tube Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;