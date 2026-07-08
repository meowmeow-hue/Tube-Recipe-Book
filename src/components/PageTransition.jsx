import React from "react";
import "../styles/transition.css";

function PageTransition({ children }) {
  return <main className="page-transition">{children}</main>;
}

export default PageTransition;