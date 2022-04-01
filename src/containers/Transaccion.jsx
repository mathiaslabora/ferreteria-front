import React, {useState} from 'react'



function Transaction() {
    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };
    return (<>
 <form action="" className="group">
     
            <select onChange={changeSelectOptionHandler} id="trans" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option defaultValue="venta">Venta</option>
                <option value="ingArticulos">Ingreso Articulos</option>
            </select>
        </form>

</>
    );
}

export default Transaction;