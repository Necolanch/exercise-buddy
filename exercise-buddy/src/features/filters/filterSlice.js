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
        setType:(state,action)=>{
            state.type=action.payload
        }
    }
})

export const {setDifficulty, setName, setMuscle, setType}=filterSlice.actions;
export default filterSlice.reducer;