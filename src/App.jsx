import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logomrlomo from '../img/logo-mr-lomo.png'
import NavMrLomo from './components/Nav';
import Display from './components/Display'

function App() {
  const Ventas = {
    primera: "Nueva Venta",
    segunda: "Ventas Realizadas"
  }

  const Facturas = {
    primera: "Facturas Realizadas",
    segunda: null
  }

  const Stock = {
    primera: "Stock Disponible",
    segunda: "Aumentar Stock"
  }

  const Productos = {
    primera: "Lista de Productos",
    segunda: "Agregar Producto"
  }


  return (
    <>
      <NavMrLomo />
      <Display Info = {Ventas}/>
      <Display Info = {Facturas} />
      <Display Info = {Stock} />
      <Display Info = {Productos} />
      
      <img className='logoLomo' src={logomrlomo} alt="logo"/>
       
    </>
  )
}

export default App
