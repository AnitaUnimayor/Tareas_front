// src/components/Sidebar.jsx
function Sidebar() {
    return (
      <div className="bg-dark text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
        <h5 className="mb-4">Panel Admin</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Dashboard</a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Productos</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">Salir</a>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Sidebar
  