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



  return (<>
    <h1>Listado De Articulos:</h1>
    <Tabla /></>)


}

export default Articulos;