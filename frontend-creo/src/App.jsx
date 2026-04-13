import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home - Página Pública</h1>} />
        <Route path="/login" element={<h1>Login - Formulario</h1>} />
        <Route path="/admin" element={<h1>Panel de Admin - Privado</h1>} />
      </Routes>
    </Router>
  );
}

export default App;