import React from 'react'
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom"

const auth = getAuth(firebaseApp);

const Navbar = ({ user }) => {

  return (
   <nav className='navbar navbar-dark bg-dark'>
       <div className='container'>
           <a className='navbar-brand' href='/'>Ferrreteria RAUL</a>
          
          <h1  >Home</h1>
          {user.rol === "admin" ? <AdminView /> : <UserView />}
          <button className='btn btn-primary' onClick={() => signOut(auth)}> Cerrar sesión</button>
          
   
     
      
     
       </div>
   </nav>
  )
}

export default Navbar