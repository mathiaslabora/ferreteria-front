import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"

import firebaseApp from "./firebase/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Home from "./containers/Home";
import Login from "./containers/Login";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
console.log(firestore)


function App() {

  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });



  return (  user ? <Home user={user}/> : <Login/>)
   
  
  
  
  {/* <Provider store={store}>
<Articulos />

      <Navbar />

         
      <div>

        <Routes>
           <Route path="/" element={} />
        </Routes>
        <h1>hola</h1>
        <Tabla />
      </div>

    </Provider> */} 
  
}

export default App;
