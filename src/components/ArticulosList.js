import React, { useEffect } from 'react'
import { fetchAllArticulos } from "../store/slices/inventario"
import { useDispatch, useSelector } from "react-redux"
import Tabla from './tablas/Tabla'




const Articulos = () => {

  const { list } = useSelector(state => state.inventario);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllArticulos());
  }, [dispatch])

  console.log(list)



  return (<div className='row justify-content-center'>
    <h1>Listado De Articulos:</h1>
    <Tabla /></div>)


}

export default Articulos;