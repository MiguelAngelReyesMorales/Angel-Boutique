import { useParams, Link } from 'react-router-dom'
import './ProductoDetalle.css'

import vestido from '../../assets/vestido.jpg'
import blusa from '../../assets/blusa.jpg'
import jeans from '../../assets/jeans.jpg'
import bolso from '../../assets/bolso.jpg'

function ProductoDetalle() {
  const { nombre } = useParams()

  const productos = {
    vestido: {
      nombre: 'Vestido',
      precio: '$120.000',
      descripcion: 'Vestido elegante y moderno para diferentes ocasiones.',
      imagen: vestido,
    },

    blusa: {
      nombre: 'Blusa',
      precio: '$80.000',
      descripcion: 'Blusa cómoda y versátil para complementar tu estilo.',
      imagen: blusa,
    },

    jeans: {
      nombre: 'Jeans',
      precio: '$100.000',
      descripcion: 'Jeans modernos y cómodos para un look casual.',
      imagen: jeans,
    },

    bolso: {
      nombre: 'Bolso',
      precio: '$90.000',
      descripcion: 'Bolso elegante y práctico para complementar cualquier outfit.',
      imagen: bolso,
    },
  }

  const producto = productos[nombre]

  if (!producto) {
    return <h1>Producto no encontrado</h1>
  }

  const agregarAlCarrito = () => {
    const carritoGuardado = localStorage.getItem('carrito')

    const carrito = carritoGuardado
      ? JSON.parse(carritoGuardado)
      : []

    const productoExistente = carrito.find(
      item => item.nombre === producto.nombre
    )

    if (productoExistente) {
      productoExistente.cantidad += 1
    } else {
      carrito.push({
        ...producto,
        cantidad: 1,
      })
    }

    localStorage.setItem(
      'carrito',
      JSON.stringify(carrito)
    )

    alert('Producto agregado al carrito')
  }

  return (
    <main className="producto-detalle">

      <Link to="/">
        <button className="regresar-btn">
          ← Regresar
        </button>
      </Link>

      <section className="producto-detalle-card">

        <div className="producto-detalle-imagen">
          <img
            src={producto.imagen}
            alt={producto.nombre}
          />
        </div>

        <div className="producto-detalle-info">

          <h1>
            {producto.nombre}
          </h1>

          <p className="producto-precio">
            {producto.precio}
          </p>

          <p>
            {producto.descripcion}
          </p>

          <button onClick={agregarAlCarrito}>
            🛒 Agregar al carrito
          </button>

        </div>

      </section>

    </main>
  )
}

export default ProductoDetalle