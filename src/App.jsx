
import './App.css'
import logomrlomo from '../img/logo-mr-lomo.png'
import NavMrLomo from './components/Nav';
import Dventa from './components/DisplayVenta'
import Dfactura from './components/DisplayFactura'
import Dstock from './components/DisplaStock'
import Dproducto from './components/DisplayProducto'

function App() {

  const Ventas = {
    primera: "Nueva Venta",
    segunda: "Ventas Realizadas"
  }

  const Facturas = {
    primera: "Facturas Realizadas",
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
      <Dventa Info = {Ventas}/>
      <Dfactura Info = {Facturas}/>
      <Dstock Info = {Stock}/>
      <Dproducto Info = {Productos}/>
      
      <img className='logoLomo' src={logomrlomo} alt="logo"/>
       
    </>
  )
}

export default App
