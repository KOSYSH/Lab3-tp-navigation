import { useState } from 'react';

function Notification() {
  const [compteur, setCompteur] = useState(3);

  return (
    <div style={{ margin: '20px 0' }}>
      <button onClick={() => setCompteur(compteur + 1)}>
        Ajouter une notification
      </button>

      {compteur > 0 && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Vous avez {compteur} notification(s) non lue(s) !
        </p>
      )}
    </div>
  );
}

export default Notification;
