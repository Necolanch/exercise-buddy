import {createSlice} from "@reduxjs/toolkit";

const initialState={
    exercise:{
    difficulty:"",
    muscle:"",
    name:"",
    type:"",
    instructions:"",
    equipment:"",
    },
    sets:0,
    reps:0,
    day:""
}

export const exerciseSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setExercise:(state,action)=>{
            state.exercise=action.payload
        },
        setSets:(state,action)=>{
            state.sets=action.payload
        },
        setReps:(state,action)=>{
            state.reps=action.payload
        },
        setDay:(state,action)=>{
            state.day=action.payload
        }
    }
})

export const {setExercise, setSets, setReps, setDay}=exerciseSlice.actions;
export default exerciseSlice.reducer;