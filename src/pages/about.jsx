import { NavLink } from 'react-router-dom';
import "./about.css";

function About() {
  return (
    <main class="About">
      <h1>About Us</h1>
      <h3>This page is currently under construction🏗️.</h3>
      <h4>Come back soon to learn about us at CTP!</h4>
      <h5>Click <NavLink to="/"><u>here</u></NavLink> to return to our home page.</h5>
    </main>
  );
}

export default About;