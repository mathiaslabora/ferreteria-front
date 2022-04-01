import { configureStore } from "@reduxjs/toolkit"
import  inventario  from "./slices/inventario"
import ventas from "./slices/ventas"
import personas from "./slices/personas"
export default configureStore({
    reducer: {
        inventario,
       ventas,
       personas,
    }
})

