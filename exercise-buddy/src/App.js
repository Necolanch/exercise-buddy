import './App.css';

import MyButton from './Components/Button';
import { AddList, PlanList } from './Components/List';

function App() {
  return (
    <div>
      <MyButton/>
      <AddList/>
      <PlanList/>
    </div>
  );
}

export default App;
