import React, { useState } from "react";
import firebaseApp from "../firebase/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

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
{/* <form class="signin">
    <h2 style="color: #219FBC;">Ingrese sus datos:</h2><br>
    <label for="user">Nombre de usuario o mail:</label><br>
    <input type="inputEmail" size="30" id="user" name="user"><br>
    <label for="pass">Contraseña:</label><br>
    <input type="password" size="30" id="pass" name="pass"><br>

    <a href="my-profile.html">No estas registrado?</a>
    <br><br>

    <label for="checkbox"></label>
    <input type="checkbox" id="checkbox" name="checkbox">Recuerdame<br><br>

    <input class="btn btn-primary" type="button" id="enviar" value="Ingresar"><br><br>
     
  </form> */}
    return (
      <div className="hero" >

        <h1 className="title" >{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

        <form className="signin" onSubmit={submitHandler}>
          <label className="from-login-label" >
            Correo electrónico:
            <input type="email" id="email" />
          </label>

          <label>
            Contraseña:
            <input type="password" id="password" />
          </label>

          <label>
            Rol:
            <select id="rol">
              <option value="admin">Administrador</option>
              <option value="user">Vendedor</option>
            </select>
          </label>

          <input
            type="submit"
            value={isRegistrando ? "Registrar" : "Iniciar sesión"}
          />
        </form>

        <button className="form-login" onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
        </button>
      </div>
    );
  }

  export default Login;
