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
          <button onClick={() => signOut(auth)}> Cerrar sesión</button>
          {user.rol === "admin" ? <AdminView /> : <UserView />}
   
     
      
     
       </div>
   </nav>
  )
}

export default Navbar