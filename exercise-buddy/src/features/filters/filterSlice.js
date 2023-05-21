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
        },
        setName:(state,action)=>{
            state.name=action.payload
        },
        setMuscle:(state,action)=>{
            state.muscle=action.payload
        },
    }
})

export const {setDifficulty, setName, setMuscle}=filterSlice.actions;
export default filterSlice.reducer;