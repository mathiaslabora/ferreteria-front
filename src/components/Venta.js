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
  list.map(a => selectListA.current.innerHTML += `<option value=${a.articulo}>${a.articulo}</option>`)
  listP.map(a => selectListCli.current.innerHTML += `<option value=${a.nombre}>${a.nombre}</option>`)
  //datal.current.innerHTML=articulos;
  let objArt = []
  const cantidad = useRef(null);

  const costo = useRef(null);


  const addArt = (e) => {
    e.preventDefault();
    listToAdd.current.innerHTML = ``
    objArt.push({
      articulo: selectListA.current.value,
      costo: costo.current.value,
      cantidad: cantidad.current.value
    })
    objArt.map(a => listToAdd.current.innerHTML += `<li>${a.articulo} - ${a.costo} - ${a.cantidad}</li>`)
    console.log(objArt)
  }

  const submitFact = () => {

  }

  return (

    <div className='row justify-content-center'>

      <div className='col-5'>
        <h1>Facturacion</h1>

        <form onSubmit={submitFact}>
          {/* cliente */}
          <label className="form-label">Cliente:</label>
          <select className="form-select" id="cliente" ref={selectListCli}>
           
          </select>
          {/* articulos */}
          <label className="form-label">Articulos:</label>
          <select className="form-select" ref={selectListA}>
            
          </select>
          <label>Costo unitario</label>
          <input className="form-control" ref={costo} placeholder='Pesos'></input>
          {/* cantidad */}
          <label>Cantidad</label>
          <input className="form-control" ref={cantidad} placeholder='Cantidad'></input>
          <button className="btn btn-primary btn-sm mb-3 mt-3" onClick={addArt} >Agregar Producto</button>
          <textarea placeholder='Descripcion' className="form-control" ></textarea>
          <button className='btn btn-danger btn-lg mb-3 mt-3 '>Facturar</button>
        </form>
      </div>
      <div className='col-5'>
        <div ref={listToAdd}></div>
      </div>
    </div>




  )
}

export default Venta