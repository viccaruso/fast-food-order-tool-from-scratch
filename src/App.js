import './App.css';
import { useState } from 'react';
import Dropdown from './Dropdown';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionList from './InstructionList';
import InstructionsForm from './InstructionsForm';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('our valued customer');
  const foodItems = ['Hamburger', 'Cheeseburger', 'Double-Double'];
  const sideItems = ['Fries', 'Apple Slices', 'Onion Rings'];
  const drinkItems = ['Coke', 'Dr. Pepper', 'Pepsi', 'Orange Fanta', 'Sprite'];

  return (
    <div className="App">
      <header className="App-header">
        Order for {orderName}
      </header>
      <main>

        <label>Who is this order for?
          <OrderNameInput setOrderName={setOrderName} />
        </label>
        <div className='dropdown-section'>
          <label>Main Item
            <Dropdown setId={setFoodId} options={foodItems} />
          </label>
          <label>Side
            <Dropdown setId={setSideId} options={sideItems} />
          </label>
          <label>Drink
            <Dropdown setId={setDrinkId} options={drinkItems} />
          </label>
        </div>
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
        <InstructionsForm instructions={instructions} setInstructions={setInstructions} />
        <h3>Special Instructions</h3>
        <InstructionList instructions={instructions} />
        
      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;
