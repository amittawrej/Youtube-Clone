import {createSlice} from '@reduxjs/toolkit';

const appSlice=createSlice({
    name:'app',
    initialState:{
        toggle:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.toggle=!state.toggle;
        }
    }
})
export default appSlice.reducer;
export const {toggleSidebar}=appSlice.actions;