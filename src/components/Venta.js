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
  const listToAdd = useRef(null);

  //setArticulos("gola")
  list.map(a => selectListA.current.innerHTML += `<option value=${a.articulo}/>${a.articulo}</option>`)
  listP.map(a => selectListCli.current.innerHTML += `<option value=${a.nombre}/>${a.nombre}</option>`)
  //datal.current.innerHTML=articulos;

  const addArt = () => {

  }


  console.log(selectListCli.current)
  return (
  
      <div className='row justify-content-center'>

        <div className='col-5'>
          <h1>Facturacion</h1>

          <form>
            {/* cliente */}
            <label className="form-label">Cliente:</label>
            <select className="form-select" id="cliente" ref={selectListCli}>
              <option>Seleccione cliente</option>
            </select>
            {/* articulos */}
            <label className="form-label">Articulos:</label>
            <select className="form-select" ref={selectListA}>
              <option>Escoja un articulo</option>
            </select>
            <label>Costo unitario</label>
            <input className="form-control" id='costo' placeholder='Pesos'></input>
            {/* cantidad */}
            <label>Cantidad</label>
            <input className="form-control" id='cantidad' placeholder='Cantidad'></input>
            <button className="btn btn-primary btn-sm mb-3 mt-3" onClick={addArt} >Agregar Producto</button>
            <textarea placeholder='Descripcion' className="form-control" ></textarea>
            <button className='btn btn-danger btn-lg mb-3 mt-3 '>Facturar</button>
          </form>
        </div>


        <div ref={listToAdd}></div>
      </div>
    



  )
}

export default Venta