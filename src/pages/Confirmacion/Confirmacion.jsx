import { Link } from 'react-router-dom'
import './Confirmacion.css'

function Confirmacion() {
  return (
    <main className="confirmacion-page">

      <section className="confirmacion-card">

        <div className="confirmacion-icono">
          ✅
        </div>

        <h1>
          ¡Compra realizada con éxito!
        </h1>

        <p className="confirmacion-mensaje">
          Gracias por comprar en Ángel Boutique.
        </p>

        <p>
          Tu pedido ha sido confirmado correctamente.
        </p>

        <div className="confirmacion-acciones">

          <Link to="/">
            <button className="inicio-btn">
              🏠 Volver al inicio
            </button>
          </Link>

          <Link to="/carrito">
            <button className="comprar-btn">
              🛍️ Seguir comprando
            </button>
          </Link>

        </div>

      </section>

      <footer className="confirmacion-footer">
        <span>
          © 2026 Ángel Boutique
        </span>
      </footer>

    </main>
  )
}

export default Confirmacion