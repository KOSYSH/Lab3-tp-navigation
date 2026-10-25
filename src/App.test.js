import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function afficherApplication() {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

test('la navigation ouvre les trois pages et permet de revenir à l’accueil', () => {
  afficherApplication();
  expect(screen.getByRole('heading', { name: 'Tableau de bord principal' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'À propos' }));
  expect(screen.getByRole('heading', { name: 'Page À propos' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Tableau de bord principal' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
  expect(screen.getByRole('heading', { name: 'Page Contact' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'Accueil' }));
  expect(screen.getByRole('heading', { name: 'Tableau de bord principal' })).toBeInTheDocument();
});

test('les boutons de connexion et de déconnexion changent le message affiché', () => {
  afficherApplication();
  expect(screen.getByRole('heading', { name: 'Veuillez vous connecter' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Se connecter' }));
  expect(screen.getByRole('heading', { name: 'Bienvenue, utilisateur connecte !' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Se deconnecter' }));
  expect(screen.getByRole('heading', { name: 'Veuillez vous connecter' })).toBeInTheDocument();
});

test('le panneau d’administration apparaît seulement pour le rôle admin', () => {
  afficherApplication();
  expect(screen.queryByRole('heading', { name: "Panneau d'administration" })).not.toBeInTheDocument();

  fireEvent.change(screen.getByRole('combobox', { name: 'Rôle :' }), { target: { value: 'admin' } });
  expect(screen.getByRole('heading', { name: "Panneau d'administration" })).toBeInTheDocument();

  fireEvent.change(screen.getByRole('combobox', { name: 'Rôle :' }), { target: { value: 'user' } });
  expect(screen.queryByRole('heading', { name: "Panneau d'administration" })).not.toBeInTheDocument();
});

test('l’ajout conserve les tâches existantes, nettoie le texte et refuse une tâche vide', () => {
  afficherApplication();
  const champ = screen.getByRole('textbox', { name: 'Nouvelle tâche :' });
  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  fireEvent.change(champ, { target: { value: '  Réviser le cours React  ' } });
  fireEvent.click(screen.getByRole('button', { name: 'Ajouter', exact: true }));
  expect(screen.getByText('Réviser le cours React')).toBeInTheDocument();
  expect(screen.getByText('Apprendre React')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
  expect(champ).toHaveValue('');

  fireEvent.change(champ, { target: { value: '   ' } });
  fireEvent.click(screen.getByRole('button', { name: 'Ajouter', exact: true }));
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
});

test('le bouton de notification incrémente le nombre affiché', () => {
  afficherApplication();
  expect(screen.getByText('Vous avez 3 notification(s) non lue(s) !')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Ajouter une notification' }));
  expect(screen.getByText('Vous avez 4 notification(s) non lue(s) !')).toBeInTheDocument();
});
