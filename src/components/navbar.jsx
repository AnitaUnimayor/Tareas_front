// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
      <span className="navbar-brand mb-0 h5">eCommerce Dashboard</span>
      <button onClick={handleLogout} className="btn btn-outline-danger">
        Cerrar sesión
      </button>
    </nav>
  )
}

export default Navbar

  