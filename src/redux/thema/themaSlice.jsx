import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    thema:false,
 
}

export const themaSlice = createSlice({
    name: "thema",
    initialState,

   reducers:{
    setDefaultThema(state) {
        state.thema = false
    },
    setDarkThema(state) {
        state.thema = true
    }
   } 

   
})

export const {setDefaultThema, setDarkThema}  = themaSlice.actions
// export default themaSlice.reducer;