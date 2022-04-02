import React from "react";
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar';
import { Provider } from "react-redux"
import store from "../store/index"
import RoutesF from "../router/Routes"
function Home({ user }) {
  return (
    <Provider store={store}>
      <Navbar user={user} />
      
        <div className="row ">
          
          <h2 >Bienvenido, Que desea hacer?</h2>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid ">
              <Link to="/ventas" className="btn btn-secondary btn-sm m-1 ">Vender</Link>
              <Link to="/ingresoarticulos" className="btn btn-secondary btn-sm m-1">Ingreso Volantes</Link>
              <Link to="/personas" className="btn btn-secondary btn-sm m-1">Ingreso Clientes - Proveedores</Link>
              <Link to="/listararticulos" className="btn btn-secondary btn-sm m-1">Listar Articulos</Link>
              <Link to="/listarventas" className="btn btn-secondary btn-sm m-1">Listar Ventas</Link>
              <Link to="/listarpersonas" className="btn btn-secondary btn-sm m-1">Listar Clientes - Proveedores</Link>
            </div>
          </nav>
        </div>
      
      <div className="container">
        <RoutesF />
      
      </div>

    </Provider>
  );
}

export default Home;