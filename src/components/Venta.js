import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllArticulos } from "../store/slices/inventario"
import { fetchAllPersonas } from '../store/slices/personas'

const Venta = () => {//traigo datos del store con el dispatch:
  const { listP } = useSelector(state => state.personas);
  const { list } = useSelector(state => state.inventario);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllArticulos());
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchAllPersonas());
  }, [dispatch])
  //para el select
  const selectListA = useRef(null);
  const selectListCli = useRef(null);


  //setArticulos("gola")
  list.map(a => selectListA.current.innerHTML += `<option value=${a.articulo}/>${a.articulo}</option>`)
  listP.map(a => selectListCli.current.innerHTML += `<option value=${a.nombre}/>${a.nombre}</option>`)
  //datal.current.innerHTML=articulos;

  console.log(selectListCli.current)
  return (
    <div className="container">
      <div className='row justify-content-center'>
        
        <div className='col-2'>
          <h1>Facturacion</h1>
          {/* articulos */}
          <form className='form'>
          <label className="form-label">Articulos:</label>
          <select ref={selectListA}>
            <option>Escoja un articulo</option>
          </select>
          <button>Agregar</button>
          
{/* cliente */}

<label className="form-label">Cliente:</label>
          <select ref={selectListCli}>
            <option>Seleccione cliente</option>
          </select>
          </form>
        </div>
        
        

      </div>
    </div>



  )
}

export default Venta