import React, { useState }from "react"

export default function nav(){
      
    const venta = document.querySelector(".DisplayVenta");

    function ClickA(item){
        alert(`Click en ${item}`)
    }

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
        <>
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
                    <li><a href="#">Nueva Venta</a></li>
                    <li><a href="#">Ventas Realizadas</a></li>
                </ul>
            </span>

            <span className='DisplayFactura'>
                <ul>
                    <li><a href="#">Facturas Realizadas</a></li>
                </ul>
            </span>

            <span className='DisplayStock'>
                <ul>
                    <li><a href="#">Stock Disponible</a></li>
                    <li><a href="#">Aumentar Stock</a></li>
                </ul>
            </span>

            <span className='DisplayProducto'>
                <ul>
                    <li><a href="#">Lista de Productos</a></li>
                    <li><a href="#">Agregar Producto</a></li>
                </ul>
            </span>
        </>
        
    )
}