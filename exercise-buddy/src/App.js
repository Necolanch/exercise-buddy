import './App.css';

import MyButton from './Components/Button';
import { AddList, PlanList, DashboardList } from './Components/List';
import HamburgerMenu from './Components/HamburgerMenu';
import { SearchInput, NumberInput, DropDown } from './Components/Input';
import Filter from './Components/Filter';
import Description from './Components/Description';
import {Routes, Route} from "react-router-dom";

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
