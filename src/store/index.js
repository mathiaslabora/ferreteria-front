import { configureStore } from "@reduxjs/toolkit"
import  inventario  from "./slices/inventario"

export default configureStore({
    reducer: {
        inventario
    }
})

