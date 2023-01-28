import './App.css';
import {Routes, Route} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

//Landing, signup, and login pages to come when I work on that functionality because they are extremely simple
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
