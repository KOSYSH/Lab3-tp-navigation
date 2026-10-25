import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
        <Link to="/apropos" style={{ marginRight: '15px' }}>À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <div style={{ padding: '20px' }}>
        <h1 className="titre-principal">Mon Application React</h1>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
