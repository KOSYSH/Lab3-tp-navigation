function AdminPanel({ role }) {
  return role === 'admin' && (
    <div>
      <h3>Panneau d'administration</h3>
      <p>Accès réservé aux administrateurs.</p>
    </div>
  );
}

export default AdminPanel;
