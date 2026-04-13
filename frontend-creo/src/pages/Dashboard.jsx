import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mi Perfil</h2>
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        {/* <p><strong>Nombre:</strong> {user.name}</p> */}
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role || 'Usuario'}</p>
      </div>
      <button 
        onClick={logout} 
        style={{ marginTop: '20px', background: 'red', color: 'white', border: 'none', padding: '10px' }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;