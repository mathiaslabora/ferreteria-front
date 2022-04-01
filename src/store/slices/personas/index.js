import { createSlice } from "@reduxjs/toolkit"

export const personasSlice = createSlice({
    name: "personas",
    initialState: {
        listP: []
    },
    reducers: {
        setPersonas: (state, action) => {
            state.listP = action.payload;
        }
    },

})

export const { setPersonas } = personasSlice.actions

export default personasSlice.reducer

export const fetchAllPersonas =  () => async (dispatch) => {
  
   await fetch("http://localhost:8080/personas")
        .then(response => response.json())
        .then((data) => {
            
            dispatch(setPersonas(data))

        }).catch(error => console.log(error))

}
