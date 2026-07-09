import { Routes, Route, Navigate } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Favorites from "./pages/Favorites";
import AddRecipe from "./pages/AddRecipe";
import About from "./pages/About";
import DrinkDetails from "./pages/DrinkDetails";

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