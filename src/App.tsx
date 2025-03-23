import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import MoviesPage from './pages/movies-page/MoviesPage';
import DetailPage from './pages/detail-page/DetailPage';
import Header from './pages/header-footer/header/Header';
import Footer from './pages/header-footer/footer/Footer';
import BookingPage from './pages/booking-page/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<DetailPage />} />
          <Route path="/showtimes" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
