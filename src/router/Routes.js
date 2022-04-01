import * as React from 'react'
import { Routes, Route } from "react-router-dom";
import IngresoPersonas from "../components/IngresoPersonas"
import Venta from "../components/Venta";
import IngresoArticulos from '../components/IngresoArticulos';
import Articulos from "../components/ArticulosList"
import VentasList from '../components/VentasList';
import PersonasList from '../components/PersonList'
function RoutesF() {

    return (
      <Routes>

        <Route path="/ventas" element={<Venta/>}/>
        <Route path="/ingresoarticulos" element={<IngresoArticulos/>}/>
        <Route path="/personas" element={<IngresoPersonas/>}/>
        <Route path="/listararticulos" element={<Articulos/>}/>
        <Route path="/listarventas" element={<VentasList/>}/>
        <Route path="/listarpersonas" element={<PersonasList/>}/>
      </Routes>
  
    )
  }
  export default RoutesF;