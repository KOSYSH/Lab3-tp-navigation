import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div style={{ margin: '20px 0' }}>
      {connecte ? (
        <div>
          <h3>Bienvenue, utilisateur connecte !</h3>
          <button onClick={() => setConnecte(false)}>Se deconnecter</button>
        </div>
      ) : (
        <div>
          <h3>Veuillez vous connecter</h3>
          <button onClick={() => setConnecte(true)}>Se connecter</button>
        </div>
      )}
    </div>
  );
}

export default Connexion;
