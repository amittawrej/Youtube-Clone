import {createSlice} from '@reduxjs/toolkit';

const appSlice=createSlice({
    name:'app',
    initialState:{
        toggle:true,
        video:[],
        category:'All',
        
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.toggle=!state.toggle;
        },
        setHomeVideo:(state,action)=>{
            state.video=action.payload;
        },
        setCategory:(state,action)=>{
            state.category=action.payload;
        }
    }
})
export default appSlice.reducer;
export const {toggleSidebar,setCategory,setHomeVideo}=appSlice.actions;