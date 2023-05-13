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

//Landing, signup, and login pages to come when I work on that functionality because they are extremely simple
//When those pages are up the path for dashboard will be /home
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/view" element={<ViewExercise/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/edit" element={<EditPlan/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
