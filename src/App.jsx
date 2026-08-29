import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Login from './pages/Login/Login'
import Carrito from './pages/Carrito/Carrito'
import ProductoDetalle from './pages/Producto/ProductoDetalle'
import Pago from './pages/Pago/Pago'
import Confirmacion from './pages/Confirmacion/Confirmacion'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/producto/:nombre"
          element={<ProductoDetalle />}
        />

        <Route
          path="/pago"
          element={<Pago />}
        />

        <Route
          path="/confirmacion"
          element={<Confirmacion />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App