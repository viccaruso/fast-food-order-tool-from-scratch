import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dropdown from './Dropdown';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionList from './InstructionList';

function App() {
  const [foodId, setFoodId] = useState(0);
  const [sideId, setSideId] = useState(0);
  const [drinkId, setDrinkId] = useState(0);
  const [instructions, setInstructions] = useState(['This is a', 'list of instructions']);
  const [orderName, setOrderName] = useState('');
  const foodItems = ['Hamburger', 'Cheeseburger', 'Double-Double'];
  const sideItems = ['Fries', 'Animal Style Fries', 'Cheese Fries'];
  const drinkItems = ['Coke', 'Dr. Pepper', 'Lemonade'];

  return (
    <div className="App">
      <header className="App-header">
        Order for {orderName}
      </header>
      <main>
        <Dropdown setId={setFoodId} options={foodItems}/>
        <Dropdown setId={setSideId} options={sideItems}/>
        <Dropdown setId={setDrinkId} options={drinkItems}/>
        <OrderNameInput setOrderName={setOrderName}/>
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId}/>
        <InstructionList instructions={instructions}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
