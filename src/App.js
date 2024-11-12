import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
