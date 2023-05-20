import {createSlice} from "@reduxjs/toolkit";

const initialState={
    difficulty:"",
    muscle:"",
    name:"",
    type:""
}

export const filterSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setDifficulty:(state,action)=>{
            state.difficulty=action.payload
        }
    }
})

export const {setDifficulty}=filterSlice.actions;
export default filterSlice.reducer;