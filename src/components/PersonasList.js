import React, { useEffect } from 'react'
import {fetchAllPersonas} from "../store/slices/personas"
import { useDispatch, useSelector } from "react-redux"
import TablaListadoPersonas from './tablas/TablaListadoPersonas'



const PersonasList = () => {
  const { listP } = useSelector(state => state.personas);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPersonas());
  }, [dispatch])
  
  console.log(listP)
  
  return (<div className='row justify-content-center'>
    <h1>Listado De Clientes - Proveedores:</h1>
        <TablaListadoPersonas/></div>)

}

export default PersonasList;