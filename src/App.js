
import './App.css';
import Discover from './components/Discover.js';
import Watchlist from './components/Watchlist';
import { Routes, Route } from "react-rooter-dom";
function App() {
  return (
    <div className="App">
    <Discover />
        <Routes>
        <Route path='/coup-coeur' element={<Watchlist/>} />
      </Routes>

      
    </div>
  );
}

export default App;
