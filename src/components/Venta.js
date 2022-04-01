import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllArticulos } from "../store/slices/inventario"
import { fetchAllPersonas } from '../store/slices/personas'

const Venta = () => {//traigo datos del store con el dispatch:
  const { listP } = useSelector(state => state.personas);
  const { list } = useSelector(state => state.inventario);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllArticulos(), fetchAllPersonas());
  }, [dispatch])

  //para el select
  const selectListA = useRef(null);


  //setArticulos("gola")
  list.map(a => selectListA.current.innerHTML += `<option value=${a.articulo}/>${a.articulo}</option>`)
  //datal.current.innerHTML=articulos;

  console.log(selectListA.current)
  return (
    <div className="container">
      <div className='row'>
        <div className='col-4'>
          <h1>Facturacion</h1>
          <label className="form-label">Articulos:</label>
          <select ref={selectListA}>
            <option>Escoja un articulo</option>
          </select>
        </div>
      </div>
    </div>



  )
}

export default Venta