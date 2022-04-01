import React, { useEffect } from 'react'
import {fetchAllArticulos} from "../store/slices/inventario"
import { useDispatch, useSelector } from "react-redux"
import Tabla from './Tabla'




const Articulos = () => {

  const { list } = useSelector(state => state.inventario);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("estoy aca")
    dispatch(fetchAllArticulos());
  }, [dispatch])
  
  console.log(list)
 

  
  return (

    <Tabla/>)
  

}

export default Articulos;