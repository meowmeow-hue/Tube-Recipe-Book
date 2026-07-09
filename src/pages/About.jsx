import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Tube Coffee</h1>
      <p className="about-subtitle">
        A simple coffee recipe web app built for learning React.
      </p>

      <div className="about-card">
        <section className="about-section">
          <h2>What is Tube Coffee?</h2>
          <p>
            <b>Tube Coffee</b> lets you explore different drinks like Coffee,
            Tea, and Frappe, save your favorites, and create your own custom
            recipes.
          </p>
        </section>

        <section className="about-section">
          <h2>Built With</h2>
          <ul className="tech-list">
            <li>React</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>localStorage</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Team</h2>
          <ul className="team-list">
            <li>Onimaru Mika</li>
            <li>Rith Monyleaphea</li>
            <li>Bun Long Kouch</li>
          </ul>
        </section>
      </div>
    </div>
  );
}