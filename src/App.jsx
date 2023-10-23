import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logomrlomo from '../img/logo-mr-lomo.png'
import NavMrLomo from './components/Nav';
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavMrLomo />
      <Display primera="Nueva Venta" segunda="Ventas Realizadas"/>
      <Display primera="Facturas Realizadas" />
      <Display primera="Stock Disponible" segunda="Aumentar Stock"/>
      <Display primera="Lista de Productos" segunda="Ingresar Producto"/>
      <img className='logoLomo' src={logomrlomo} alt="logo"/>
       
    </>
  )
}

export default App
