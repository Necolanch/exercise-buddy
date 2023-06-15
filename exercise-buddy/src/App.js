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
import Settings from './pages/Settings';


import { useSelector } from "react-redux";


function App() {
  
  const filterState = useSelector(state=>state.filter);
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
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
