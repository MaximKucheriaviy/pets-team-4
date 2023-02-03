import { createSlice } from "@reduxjs/toolkit";
import { darkTheme } from "../../theme/defaultThtme";
const initialState = {
loading:false,
    thema:false,
 
}

const themaSlice = createSlice({
    name: "thema",
    initialState,
    extraReducers: {
        [darkTheme.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [darkTheme.fulfilled]: state => {
            state.loading = false;
            state.thema = true;
        },
        [darkTheme.rejected]: state => {
            state.loading = false;
            state.thema = true;
        },
    }
   
})

export default themaSlice.reducer;