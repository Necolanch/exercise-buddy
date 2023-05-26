import './App.css';
import {Routes, Route} from "react-router-dom";

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import ViewExercise from './pages/ViewExercise';
import Plan from './pages/Plan';
import EditPlan from './pages/EditPlan';
import Favorites from './pages/Favorites';
import Signup from './pages/Signup';
import Login from './pages/Login';

import authService from './services/auth.service';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday} from "./features/user/userSlice";

function App() {
  const user=JSON.parse(localStorage.getItem("user"));
  const dispatch=useDispatch();
  useEffect(()=>{
authService.getUser(user.id)
        .then(data=>{
            dispatch(setUsername(data.username));
            dispatch(setId(data.id));
            dispatch(setSunday(data.Sunday));
            dispatch(setMonday(data.Monday));
            dispatch(setTuesday(data.Tuesday));
            dispatch(setWednesday(data.Wednesday));
            dispatch(setThursday(data.Thursday));
            dispatch(setFriday(data.Friday));
            dispatch(setSaturday(data.Saturday));
            dispatch(setFavorites(data.favorites));
        })
        .catch(err=>console.log(err))
  },[])
  const filterState = useSelector(state=>state.filter);
  const userState=useSelector(state=>state.user);
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<Search state={filterState}/>}/>
        <Route path="/view" element={<ViewExercise/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/edit" element={<EditPlan filterState={filterState}/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
