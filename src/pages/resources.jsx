import { NavLink } from 'react-router-dom';
import './resources.css';

function Resources() {
  return (
    <main className="Resources">
      <h1>Resources</h1>
      <h3>This page is currently under construction🏗️.</h3>
      <h4>Come back soon to learn about the resources we offer at CTP!</h4>
      <h5>Click <NavLink to="/"><u>here</u></NavLink> to return to our home page.</h5>
    </main>
  );
}

export default Resources;