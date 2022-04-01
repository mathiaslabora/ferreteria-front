import { createSlice } from "@reduxjs/toolkit"

export const ventasSlice = createSlice({
    name: "ventas",
    initialState: {
        listV: []
    },
    reducers: {
        setVentas: (state, action) => {
            state.listV = action.payload;
        }
    },

})

export const { setVentas } = ventasSlice.actions

export default ventasSlice.reducer

export const fetchAllVentas =  () => async (dispatch) => {
    console.log("estoy aca")
   await fetch("http://localhost:8080/facturas")
        .then(response => response.json())
        .then((data) => {
            
            dispatch(setVentas(data))

        }).catch(error => console.log(error))

}
