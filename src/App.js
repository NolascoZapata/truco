import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import TableCloth from './components/TableCloth';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path='/game' element={<TableCloth/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
