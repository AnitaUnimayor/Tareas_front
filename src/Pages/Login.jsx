// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    // Simulación de validación de usuarios
    if (email === 'admin' && password === '1234') {
      localStorage.setItem('role', 'admin')
      navigate('/Dashboard')
    } else if (email === 'usuario' && password === '1234') {
      localStorage.setItem('role', 'user')
      navigate('/UserProjects')
    } else {
      alert('Credenciales incorrectas')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="p-4 bg-white rounded shadow" style={{ minWidth: 300 }}>
        <h4 className="mb-3">Iniciar Sesión</h4>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login


