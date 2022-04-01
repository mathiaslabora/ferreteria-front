import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Navbar from '../components/Navbar';
import Articulos from '../components/ArticulosList'
import { Provider } from "react-redux"
import store from "../store/index"
import Tabla from '../components/Tabla';
import Transaction from "./Transaccion";


function Home({ user }) {
  return (
      <Provider store={store}>
       

        <Navbar user={user} />


        <div>

          <Routes>
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/transaction" element={<Transaction/>} />
          </Routes>
          <h1>hola</h1>
          

        </div>

      </Provider>

   
  );
}

export default Home;