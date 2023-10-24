import React from "react"

export default function nav(){
      
    function ClickA(item){
        alert(`Click en ${item}`)
    }

    return(
        <nav className='nav'>
            <ul>
                <li><a href="#" onClick={()=>{ClickA('ventas')}}>VENTAS</a></li>
                <li><a href="#" onClick={()=>{ClickA('facturas')}}>FACTURAS</a></li>
                <li><a href="#" onClick={()=>{ClickA('stock')}}>STOCK</a></li>
                <li><a href="#" onClick={()=>{ClickA('productos')}}>PRODUCTOS</a></li>
            </ul>
        </nav> 
    )
}