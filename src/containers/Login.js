import React, { useState } from "react";
import firebaseApp from "../firebase/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = getAuth();

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password)

      }
    }

    return (


      
      <div className="container" >
<div className="row m-5 justify-content-center">
  <div className="mb-3 mt-3 col-auto  card">
            <h1 className="title" >{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

        <form className="form-login" onSubmit={submitHandler}>
          <div className="input-group justify-content-between ">
          <label className="input-group-text" >
            Correo electrónico:
            <input className="form-control" type="email" id="email" />
          </label>

          <label className="input-group-text">
            Contraseña:
            <input className="form-control" type="password" id="password" />
          </label>
          
          <label className="input-group-text">
            Rol:
            <select className="form-select" id="rol">
              <option value="admin">Administrador</option>
              <option value="user">Vendedor</option>
            </select>
          </label>
          </div>
          <input className="btn btn-primary mt-3"
            type="submit"
            value={isRegistrando ? "Registrar" : "Iniciar sesión"}
          />
        </form>

        <button className="btn btn-primary mt-3 mb-3" onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
        </button>
      </div>
      </div>
      </div>

    );
  }

  export default Login;
