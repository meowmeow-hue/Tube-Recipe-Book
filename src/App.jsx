import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Favorites from "./pages/Favorites";
import AddRecipe from "./pages/AddRecipe";
import About from "./pages/About";
import DrinkDetail from "./pages/DrinkDetails";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe" element={<AddRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/drink/:id" element={<DrinkDetail />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
