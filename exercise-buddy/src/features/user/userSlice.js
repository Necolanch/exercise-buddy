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
            state.Sunday=JSON.parse(action.payload)
        },
        setMonday:(state,action)=>{
            state.Monday=JSON.parse(action.payload)
        },
        setTuesday:(state,action)=>{
            state.Tuesday=JSON.parse(action.payload)
        },
        setWednesday:(state,action)=>{
            state.Wednesday=JSON.parse(action.payload)
        },
        setThursday:(state,action)=>{
            state.Thursday=JSON.parse(action.payload)
        },
        setFriday:(state,action)=>{
            state.Friday=JSON.parse(action.payload)
        },
        setSaturday:(state,action)=>{
            state.Saturday=JSON.parse(action.payload)
        },
        setFavorites:(state,action)=>{
            state.favorites=JSON.parse(action.payload)
        }
    }
})

export const {setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday, setFavorites}=userSlice.actions;
export default userSlice.reducer;