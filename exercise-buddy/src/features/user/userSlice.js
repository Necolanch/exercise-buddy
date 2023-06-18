import {createSlice} from "@reduxjs/toolkit";

const initialState={
    username:"",
    id:"",
    Sunday:[],
    Monday:[],
    Tuesday:[],
    Wednesday:[],
    Thursday:[],
    Friday:[],
    Saturday:[],
    favorites:[]
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsername:(state,action)=>{
            state.username=action.payload
        },
        setId:(state,action)=>{
            state.id=action.payload
        },
        setSunday:(state,action)=>{
            state.Sunday=action.payload
        },
        setMonday:(state,action)=>{
            state.Monday=action.payload
        },
        setTuesday:(state,action)=>{
            state.Tuesday=action.payload
        },
        setWednesday:(state,action)=>{
            state.Wednesday=action.payload
        },
        setThursday:(state,action)=>{
            state.Thursday=action.payload
        },
        setFriday:(state,action)=>{
            state.Friday=action.payload
        },
        setSaturday:(state,action)=>{
            state.Saturday=action.payload
        },
        setFavorites:(state,action)=>{
            state.favorites=action.payload
        }
    }
})

export const {setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday, setFavorites}=userSlice.actions;
export default userSlice.reducer;