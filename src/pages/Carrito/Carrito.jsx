import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Carrito.css'

function Carrito() {
  const navigate = useNavigate()

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito')

    return carritoGuardado
      ? JSON.parse(carritoGuardado)
      : []
  })

  const eliminarProducto = (indice) => {
    const nuevoCarrito = carrito.filter(
      (_, index) => index !== indice
    )

    setCarrito(nuevoCarrito)

    localStorage.setItem(
      'carrito',
      JSON.stringify(nuevoCarrito)
    )
  }

  const aumentarCantidad = (indice) => {
    const nuevoCarrito = [...carrito]

    nuevoCarrito[indice].cantidad += 1

    setCarrito(nuevoCarrito)

    localStorage.setItem(
      'carrito',
      JSON.stringify(nuevoCarrito)
    )
  }

  const disminuirCantidad = (indice) => {
    const nuevoCarrito = [...carrito]

    if (nuevoCarrito[indice].cantidad > 1) {
      nuevoCarrito[indice].cantidad -= 1
    }

    setCarrito(nuevoCarrito)

    localStorage.setItem(
      'carrito',
      JSON.stringify(nuevoCarrito)
    )
  }

  const vaciarCarrito = () => {
    setCarrito([])
    localStorage.removeItem('carrito')
  }

  const calcularPrecio = (precio) => {
    return Number(
      precio.replace('$', '').replace('.', '')
    )
  }

  const total = carrito.reduce((suma, producto) => {
    return suma + (
      calcularPrecio(producto.precio) *
      producto.cantidad
    )
  }, 0)

  const pagar = () => {
    navigate('/pago')
  }

  return (
    <main className="carrito-page">

      <header className="carrito-header">
        <h1>🛒 Mi carrito</h1>
      </header>

      <section className="carrito-contenido">

        {carrito.length === 0 ? (

          <div className="carrito-vacio">

            <div className="carrito-icono">
              🛍️
            </div>

            <h2>
              Tu carrito está vacío
            </h2>

            <p>
              Agrega productos para comenzar tu compra.
            </p>

            <Link to="/">
              <button>
                ← Continuar comprando
              </button>
            </Link>

          </div>

        ) : (

          <div className="carrito-lista">

            {carrito.map((producto, indice) => (

              <div
                className="carrito-producto"
                key={indice}
              >

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                />

                <div className="carrito-producto-info">

                  <h2>
                    {producto.nombre}
                  </h2>

                  <p>
                    {producto.precio}
                  </p>

                  {/* CANTIDAD */}

                  <div className="cantidad-control">

                    <span>
                      Cantidad:
                    </span>

                    <button
                      className="cantidad-btn"
                      onClick={() =>
                        disminuirCantidad(indice)
                      }
                    >
                      −
                    </button>

                    <span className="cantidad-numero">
                      {producto.cantidad}
                    </span>

                    <button
                      className="cantidad-btn"
                      onClick={() =>
                        aumentarCantidad(indice)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* SUBTOTAL */}

                  <p>
                    Subtotal: $
                    {(
                      calcularPrecio(producto.precio) *
                      producto.cantidad
                    ).toLocaleString('es-CO')}
                  </p>

                  <button
                    onClick={() =>
                      eliminarProducto(indice)
                    }
                  >
                    🗑️ Eliminar
                  </button>

                </div>

              </div>

            ))}

            {/* RESUMEN DE COMPRA */}

            <div className="carrito-resumen">

              <h2>
                Resumen de compra
              </h2>

              <p className="carrito-total">
                Total: $
                {total.toLocaleString('es-CO')}
              </p>

              <div className="carrito-acciones">

                <button
                  className="vaciar-carrito-btn"
                  onClick={vaciarCarrito}
                >
                  🗑️ Vaciar carrito
                </button>

                <button
                  className="pagar-btn"
                  onClick={pagar}
                >
                  💳 Pagar
                </button>

              </div>

            </div>

          </div>

        )}

      </section>

      <footer className="carrito-footer">
        <span>
          © 2026 Ángel Boutique
        </span>
      </footer>

    </main>
  )
}

export default Carrito