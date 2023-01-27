import './App.css';

import MyButton from './Components/Button';
import { AddList, PlanList } from './Components/List';
import HamburgerMenu from './Components/HamburgerMenu';

function App() {
  return (
    <div>
      <MyButton/>
      <AddList/>
      <PlanList/>
      <HamburgerMenu/>
    </div>
  );
}

export default App;
