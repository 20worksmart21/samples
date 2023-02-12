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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  passwordValidation("afsaaaaA1a!")
  return (
    <div className="App">
      <Navigation />
      <div className='mainContent'>
        <SearchBox />
        <Router>
          <Routes>
            <Route path="/carousel" element={<CarouselComponent />} />
            <Route path="/todo" element={<TODO />} />
            <Route path="/directory" element={<Directory />} />
          </Routes>
        </Router >
      </div>
    </div>

  );
}

export default App;
