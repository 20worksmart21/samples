import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo } from 'react';
import CarouselComponent from './carousel/carousel'
import TODO from './Todo/Todo';
import InventoryManagement from './utils/inventoryManagement';
import { passwordValidation } from './utils/inputValidation';
import Directory from './Directory/Directory'

function App() {
  passwordValidation("afsaaaaA1a!")
  return (
    <div className="App">
      <Directory />
    </div>
  );
}

export default App;
