import { createSlice } from "@reduxjs/toolkit"

export const articulosSlice = createSlice({
    name: "inventario",
    initialState: {
        list: []
    },
    reducers: {
        setArticulos: (state, action) => {
            state.list = action.payload;
        }
    },

})

export const { setArticulos } = articulosSlice.actions

export default articulosSlice.reducer

export const fetchAllArticulos =  () => async (dispatch) => {
    
   await fetch("http://localhost:8080/articulos")
        .then(response => response.json())
        .then((data) => {
            
            dispatch(setArticulos(data))

        }).catch(error => console.log(error))

}
