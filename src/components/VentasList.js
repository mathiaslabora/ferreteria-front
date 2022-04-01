import React, { useEffect } from 'react'
import {fetchAllVentas} from "../store/slices/ventas"
import { useDispatch, useSelector } from "react-redux"
import TablaListadoVentas from './tablas/TablaListadoVentas'



const VentasList = () => {
  const { listV } = useSelector(state => state.ventas);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllVentas());
  }, [dispatch])
  
  console.log(listV)
  
  return (<>
    <h1>Listado De Ventas:</h1>
        <TablaListadoVentas/></>)

}

export default VentasList;