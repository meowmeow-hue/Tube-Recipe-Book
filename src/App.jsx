import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Favorites from "./pages/Favorites.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import About from "./pages/About.jsx";
import DrinkDetails from "./pages/DrinkDetails.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/drink/:id" element={<DrinkDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>

      <Footer />
    </>
  );
}