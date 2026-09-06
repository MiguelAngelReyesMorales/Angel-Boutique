import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  // Permite controlar la navegación después de iniciar sesión
  const navigate = useNavigate()

   // Evita recargar la página y dirige al usuario al inicio
  const iniciarSesion = (e) => {
    e.preventDefault()
    navigate('/inicio')
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <h1>Ángel Boutique</h1>

        <form onSubmit={iniciarSesion}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="remember-container">
            <label>
              <input type="checkbox" />
              Recordarme
            </label>

            <a href="#">¿Olvidó su contraseña?</a>
          </div>

          <button type="submit">
            Iniciar sesión
          </button>

          <p className="register-text">
            ¿No tiene una cuenta? <a href="#">Registrarse</a>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Login