import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './pages/accounts/signup';
import Login from './pages/accounts/login';
import Home from './pages/home';
import Movie from './pages/movie';
import Time from './pages/ticket_timing';
import Seat from './pages/seating';
import ForgotPassword from './pages/accounts/forgot-password';
import ConfirmationCode from './pages/accounts/confirmation-code/index';
import CreateNewPassword from './pages/accounts/create-new-password';
import Profile from './pages/accounts/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:email" element={<Profile />} />
          <Route path="/retrieve-password" element={<ForgotPassword />} />
          <Route path="/confirmation-code/:email" element={<ConfirmationCode />} />
          <Route path="/create-new-password/:email" element={<CreateNewPassword />} />
          <Route path="/movies/:mid/" element={<Movie />} />
          <Route path="/movies/:mid/timing/" element={<Time />} />
          <Route path="city/:ctid/cinemas/:cid/movies/:mid/timing/:tid/language/:lid/seatselection/:did" element={<Seat />} />
          {/* <Route path="confirm-booking" element={<BookingConfirmation />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
