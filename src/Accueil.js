import { useState } from 'react';
import Connexion from './Connexion';
import AdminPanel from './AdminPanel';
import Notification from './Notification';
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';

function Accueil() {
  const [role, setRole] = useState('user');

  return (
    <div className="carte-conteneur">
      <h2>Tableau de bord principal</h2>
      <Logo />
      <Connexion />
      <div style={{ margin: '20px 0' }}>
        <label>
          Rôle :
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option value="user">Utilisateur</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <AdminPanel role={role} />
      </div>
      <Notification />
      <ListeTaches />
      <LecteurAudio />
    </div>
  );
}

export default Accueil;
