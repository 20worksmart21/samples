import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo } from 'react';
import CarouselComponent from './carousel/carousel'
import TODO from './Todo/Todo';
import InventoryManagement from './utils/inventoryManagement';
import { passwordValidation } from './utils/inputValidation';
import Directory from './Directory/Directory';
import Navigation from './Accordion/Accordion';
import SearchBox from './searchBar/searchBar';

function App() {
  passwordValidation("afsaaaaA1a!")
  return (
    <div className="App">
      <Navigation />
      <SearchBox />
    </div>
  );
}

export default App;
