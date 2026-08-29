import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Pago.css'

function Pago() {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')

  const carritoGuardado = localStorage.getItem('carrito')

  const carrito = carritoGuardado
    ? JSON.parse(carritoGuardado)
    : []

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

  const confirmarPedido = (e) => {
    e.preventDefault()

    if (!nombre || !correo || !telefono || !direccion) {
      alert('Por favor completa todos los campos.')
      return
    }

    localStorage.removeItem('carrito')

    navigate('/confirmacion')
  }

  return (
    <main className="pago-page">

      <header className="pago-header">
        <h1>💳 Finalizar compra</h1>
      </header>

      <section className="pago-contenido">

        <div className="pago-card">

          <h2>Datos de entrega</h2>

          <form onSubmit={confirmarPedido}>

            <div className="campo">
              <label>
                Nombre completo
              </label>

              <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>
                Teléfono
              </label>

              <input
                type="tel"
                placeholder="Ingresa tu teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="campo">
              <label>
                Dirección de entrega
              </label>

              <input
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            <div className="pago-resumen">

              <h2>Resumen de compra</h2>

              <p>
                Productos: {carrito.length}
              </p>

              <p className="pago-total">
                Total: $
                {total.toLocaleString('es-CO')}
              </p>

            </div>

            <button
              type="submit"
              className="confirmar-btn"
            >
              💳 Confirmar pedido
            </button>

          </form>

          <Link to="/carrito">
            <button className="volver-btn">
              ← Volver al carrito
            </button>
          </Link>

        </div>

      </section>

      <footer className="pago-footer">
        <span>
          © 2026 Ángel Boutique
        </span>
      </footer>

    </main>
  )
}

export default Pago