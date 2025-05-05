// src/pages/UserProjects.jsx
import { useNavigate } from 'react-router-dom'

function UserProjects() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('role')
    navigate('/')
  }

  const projects = [
    { id: 1, name: 'Landing Page', link: '#' },
    { id: 2, name: 'Tienda Online', link: '#' },
    { id: 3, name: 'App Móvil', link: '#' },
  ]

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between mb-4">
        <h4>Mis Proyectos</h4>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
      <ul className="list-group">
        {projects.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            {p.name}
            <a href={p.link} className="btn btn-sm btn-primary">Ver</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserProjects
