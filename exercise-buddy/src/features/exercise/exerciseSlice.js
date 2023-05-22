import {createSlice} from "@reduxjs/toolkit";

const initialState={
    exercise:{
    difficulty:"",
    muscle:"",
    name:"",
    type:"",
    instructions:"",
    equipment:""
    }
}

export const exerciseSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setExercise:(state,action)=>{
            state.exercise=action.payload
        }
    }
})

export const {setExercise}=exerciseSlice.actions;
export default exerciseSlice.reducer;