import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './pages/accounts/signup';
import Login from './pages/accounts/login';
import Home from './pages/home';
import Movie from './pages/movie';
import Time from './pages/ticket_timing';
import Seat from './pages/seating';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies/:id/" element={<Movie />} />
          <Route path="/timing" element={<Time />} />
          <Route path="/seatselection/:id/:id" element={<Seat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
