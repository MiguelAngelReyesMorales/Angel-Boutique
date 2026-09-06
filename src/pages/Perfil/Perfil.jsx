import { Link, useNavigate } from 'react-router-dom'
import './Perfil.css'

// Muestra la información del usuario y las opciones disponibles en su perfil
function Perfil() {
  // Permite regresar al usuario al inicio de sesión
const navigate = useNavigate()
  return (
    <main className="perfil-page">

      <div className="perfil-container">

        <h1 className="perfil-titulo">
          Mi Perfil
        </h1>

        <section className="perfil-card">

          {/* Información básica del usuario */}
          <div className="perfil-datos">

            <div className="perfil-dato">
              <strong>Nombre</strong>
              <span>Miguel Ángel</span>
            </div>

            <div className="perfil-dato">
              <strong>Apellidos</strong>
              <span>Reyes Morales</span>
            </div>

            <div className="perfil-dato">
              <strong>Correo</strong>
              <span>Miguelreyes@gmail.com</span>
            </div>

            <div className="perfil-dato">
              <strong>Teléfono</strong>
              <span>321456789</span>
            </div>

            <div className="perfil-dato">
              <strong>Dirección</strong>
              <span>Calle 10 #20-30</span>
            </div>

          </div>

          {/* Historial de compras */}
          <div className="perfil-seccion">
            <h2>Historial de compras</h2>

          <p className="compra-item">Compra #001</p>
          <p className="compra-item">Compra #002</p>
          <p className="compra-item">Compra #003</p>
          </div>

          {/* Acciones del perfil */}
          <div className="perfil-acciones">

          <button className="editar-btn">
            Editar perfil
          </button>

          <button
            className="cerrar-btn"
            onClick={() => navigate('/')}
          >
            Cerrar sesión
          </button>

          </div>

        </section>

        {/* Regresa a la página principal */}
        <Link to="/inicio">
          <button className="perfil-regresar">
            ↩ Regresar
          </button>
        </Link>

      </div>

      <footer className="perfil-footer">
        © 2026 Ángel Boutique
      </footer>

    </main>
  )
}

export default Perfil