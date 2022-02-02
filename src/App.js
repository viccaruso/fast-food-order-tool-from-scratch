import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [foodId, setFoodId] = useState(0);
  const [sideId, setSideId] = useState(0);
  const [drinkId, setDrinkId] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
