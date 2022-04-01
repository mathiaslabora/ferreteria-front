import * as React from 'react'
import Home from "../container/Home";
import { Routes, Route } from "react-router-dom";
import { Transaction } from "firebase/firestore";



function RoutesF() {

    return (
      <Routes>
        <Route path="/" element={< Home />} />
        < Route path="/transaction" element={< Transaction />} />
      </Routes>
  
    )
  }
  export default RoutesF;