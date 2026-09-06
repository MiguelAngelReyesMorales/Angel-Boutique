import { useState } from 'react'
import './Inicio.css'
import { Link } from 'react-router-dom'
import Producto from '../../components/Producto/Producto'

import coleccion from '../../assets/coleccion.jpg'
import vestido from '../../assets/vestido.jpg'
import blusa from '../../assets/blusa.jpg'
import jeans from '../../assets/jeans.jpg'
import bolso from '../../assets/bolso.jpg'

function Inicio() {

  const [busqueda, setBusqueda] = useState('')
  // Almacena el texto ingresado por el usuario para filtrar los productos

  const productos = [
    {
      imagen: vestido,
      nombre: 'Vestido',
    },
    {
      imagen: blusa,
      nombre: 'Blusa',
    },
    {
      imagen: jeans,
      nombre: 'Jeans',
    },
    {
      imagen: bolso,
      nombre: 'Bolso',
    },
  ]

  // Filtra los productos de acuerdo con el texto ingresado en el buscador
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  )

  return (
    <div className="inicio">

      {/* Encabezado */}
      <header className="inicio-header">

        <div className="logo-container">
          <h2>ÁNGEL BOUTIQUE</h2>
        </div>

        {/* BUSCADOR */}
        <div className="buscador">
          🔎
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="acciones">

          <Link to="/login">
            <button>👤 Perfil</button>
          </Link>

          <Link to="/carrito">
            <button>🛒 Carrito</button>
          </Link>

        </div>

      </header>

      {/* Nueva colección */}
      <section className="nueva-coleccion">

        <h1>🆕 NUEVA COLECCIÓN</h1>

        <p>
          👁 Descubre las últimas tendencias de la temporada.
        </p>

        <div className="coleccion-imagen">
          <img
            src={coleccion}
            alt="Nueva colección"
          />
        </div>

        <a href="#productos">
          <button className="comprar-btn">
            🛍 Comprar ahora
          </button>
        </a>

      </section>

      {/* Categorías */}
      <section className="categorias">

        <h2>🏷️ Categorías</h2>

        <div className="categorias-lista">

          <Link to="/producto/vestido">
            <button>👗 Vestidos</button>
          </Link>

          <Link to="/producto/blusa">
            <button>👚 Blusas</button>
          </Link>

          <Link to="/producto/jeans">
            <button>👖 Jeans</button>
          </Link>

          <Link to="/producto/bolso">
            <button>👜 Bolsos</button>
          </Link>

        </div>

      </section>

      {/* Productos destacados */}
      <section
        id="productos"
        className="productos-destacados"
      >

        <h2>⭐ Productos destacados</h2>

        <div className="productos-lista">

          {productosFiltrados.length > 0 ? (

            productosFiltrados.map((producto) => (

              <Producto
                key={producto.nombre}
                imagen={producto.imagen}
                nombre={producto.nombre}
              />

            ))

          ) : (

            <p className="sin-resultados">
              😕 No se encontraron productos.
            </p>

          )}

        </div>

      </section>

      {/* Pie de página */}
      <footer className="inicio-footer">

        <span>© 2026 Ángel Boutique</span>

        <button>↩ Regresar</button>

      </footer>

    </div>
  )
}

export default Inicio