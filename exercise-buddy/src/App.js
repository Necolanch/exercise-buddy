import './App.css';
import {Routes, Route} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import ViewExercise from './pages/ViewExercise';
import Plan from './pages/Plan';
import EditPlan from './pages/EditPlan';

//Landing, signup, and login pages to come when I work on that functionality because they are extremely simple
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/view" element={<ViewExercise/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/edit" element={<EditPlan/>}/>
      </Routes>
    </div>
  );
}

export default App;
