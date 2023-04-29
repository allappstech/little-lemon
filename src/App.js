import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Booking from './Pages/Booking';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Booking" element={<Booking/>} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
