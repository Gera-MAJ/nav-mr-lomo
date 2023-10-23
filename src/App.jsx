import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logomrlomo from '../img/logo-mr-lomo.png'
import ventas from './components/ventas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='nav'>
        <ul>
          <li onClick={() => {ventas}}>VENTAS</li>
          <li>FACTURAS</li>
          <li>STOCK</li>
          <li>PRODUCTOS</li>
        </ul>
      </nav>

      <span className='extVenta'>
        <ul>
          <li>Nueva Venta</li>
          <li>Ventas Realizadas</li>
        </ul>
      </span>

      <span className='extFacturas'>
        <ul>
          <li>Facturas Realizadas</li>
        </ul>
      </span>

      <span className='extStock'>
        <ul>
          <li>Stock Disponible</li>
          <li>Aumentar Stock</li>
        </ul>
      </span>

      <span className='extProductos'>
        <ul>
          <li>Lista de Productos</li>
          <li>Ingresar Producto</li>
        </ul>
      </span>

      <img className='logoLomo' src={logomrlomo} alt="logo"/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
