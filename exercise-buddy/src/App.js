import './App.css';

import MyButton from './Components/Button';
import { AddList, PlanList } from './Components/List';
import HamburgerMenu from './Components/HamburgerMenu';
import { SearchInput, NumberInput, DropDown } from './Components/Input';
import Filter from './Components/Filter';
import Description from './Components/Description';

function App() {
  return (
    <div>
      <MyButton/>
      <AddList/>
      <PlanList/>
      <HamburgerMenu/>
      <SearchInput/>
      <NumberInput/>
      <DropDown/>
      <Filter/>
      <Description/>
    </div>
  );
}

export default App;
