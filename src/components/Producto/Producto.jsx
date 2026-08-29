import './Producto.css'
import { Link } from 'react-router-dom'

function Producto({ imagen, nombre }) {
  return (
    <div className="producto">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
      </div>

      <Link
        to={`/producto/${nombre.toLowerCase()}`}
        className="producto-detalles-btn"
      >
        🛍 Ver detalles
      </Link>
    </div>
  )
}

export default Producto