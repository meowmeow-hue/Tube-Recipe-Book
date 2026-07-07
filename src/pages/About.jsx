import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Tube Coffee</h1>

        <p>
          Tube Coffee Recipe Book is a simple coffee website that helps users
          discover, review, and save their favorite drink recipes easily.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Purpose</h2>
          <p>
            This project helps coffee lovers explore different drinks, learn
            recipe details, and organize their favorite coffee choices.
          </p>
        </div>

        <div className="about-card">
          <h2>What Users Can Do</h2>
          <p>
            Users can browse the menu, search for drinks, view recipe details,
            and save drinks they like to the favorites page.
          </p>
        </div>

        <div className="about-card">
          <h2>Why We Built It</h2>
          <p>
            We built this website to make coffee recipes more attractive,
            organized, and easy to review for everyone.
          </p>
        </div>
      </section>

      <section className="about-highlight">
        <h2>Made with React & Vite</h2>

        <p>
          This project uses reusable components, page routing, clean styling,
          and smooth page transitions to improve the user experience.
        </p>
      </section>
    </div>
  );
}

export default About;