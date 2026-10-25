import { useState } from 'react';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 1, titre: 'Apprendre React' },
    { id: 2, titre: 'Créer une application' },
    { id: 3, titre: 'Tester le code' }
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (event) => {
    event.preventDefault();
    if (nouvelleTache.trim()) {
      setTaches(prev => [
        ...prev,
        { id: prev.length + 1, titre: nouvelleTache.trim() }
      ]);
      setNouvelleTache('');
    }
  };

  return (
    <div>
      <h3>Liste des tâches à accomplir</h3>
      <form onSubmit={ajouterTache}>
        <label>
          Nouvelle tâche :
          <input value={nouvelleTache} onChange={(event) => setNouvelleTache(event.target.value)} />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;
