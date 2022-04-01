import React, { useState, useRef } from 'react'
import Venta from "../components/Venta"
import IngresoArticulos from "../components/IngresoArticulos"


function Transaction() {
    const voi = useRef("")
    const [selected, setSelected] = useState("");
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
        
        

    };
    
     selected?<Venta/>:<IngresoArticulos/>
    
    
    return (<>
        <form action="" className="group">

            <select onChange={changeSelectOptionHandler} id="trans" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option defaultValue="venta">Venta</option>
                <option value="ingArticulos">Ingreso Articulos</option>
                </select>
            
        </form>
        <div ref={voi}></div>
        
    </>
    );
}

export default Transaction;