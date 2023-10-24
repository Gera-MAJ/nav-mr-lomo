import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

export default function nav(){
      
    const venta = document.querySelector(".DisplayVenta");

    function Click(name){

        const venta = document.querySelector(".DisplayVenta");
        const factura = document.querySelector(".DisplayFactura");
        const stock = document.querySelector(".DisplayStock");
        const producto = document.querySelector(".DisplayProducto");

        if(name == "venta"){
            venta.classList.toggle("DisplayVentaActive")
        } else if (name == "facturas"){
                factura.classList.toggle("DisplayFacturaActive")
            }else if (name == "stock"){
                    stock.classList.toggle("DisplayStockActive")
                }else if (name == "productos"){
                    producto.classList.toggle("DisplayProductoActive")
                }
    }

    return(
        <BrowserRouter>
            <nav className='nav'>
            <ul>
                <li><a href="#" onClick={()=>{Click('venta')}}>VENTAS</a></li>
                <li><a href="#" onClick={()=>{Click('facturas')}}>FACTURAS</a></li>
                <li><a href="#" onClick={()=>{Click('stock')}}>STOCK</a></li>
                <li><a href="#" onClick={()=>{Click('productos')}}>PRODUCTOS</a></li>
            </ul>
            </nav> 

            <span className='DisplayVenta'>
                <ul>
                    <li><Link to="/NuevaVenta">Nueva Venta</Link></li>
                    <li><Link to="/VentasRealizadas">Ventas Realizadas</Link></li>
                </ul>
            </span>

            <span className='DisplayFactura'>
                <ul>
                    <li><Link to="/Facturas">Facturas Realizadas</Link></li>
                </ul>
            </span>

            <span className='DisplayStock'>
                <ul>
                    <li><Link to="/StockDisponible">Stock Disponible</Link></li>
                    <li><Link to="/AumentarStock">Aumentar Stock</Link></li>
                </ul>
            </span>

            <span className='DisplayProducto'>
                <ul>
                    <li><Link to="/ListaProductos">Lista de Productos</Link></li>
                    <li><Link to="/AgregarProducto">Agregar Producto</Link></li>
                </ul>
            </span>
        </BrowserRouter>
        
    )
}