import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import MoviesPage from './pages/movies-page/MoviesPage';
import DetailPage from './pages/detail-page/DetailPage';
import Header from './pages/header-footer/header/Header';
import Footer from './pages/header-footer/footer/Footer';
import BookingPage from './pages/booking-page/BookingPage';
import LoginPage from './pages/login-page/LoginPage';
import RegisterPage from './pages/register-page/RegisterPage';
import AdminPage from './pages/admin/AdminPage';
import AddMoviePage from './pages/admin/movie/AddMoviePage';
import MovieTable from './pages/admin/movie/components/MovieTable';

// Layout chính chứa Header & Footer
const MainLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet /> {/* Nơi hiển thị nội dung các trang con */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nhóm các trang có Header/Footer vào MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<DetailPage />} />
          <Route path="/showtimes" element={<BookingPage />} />
        </Route>

        {/* Trang login không có Header/Footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/" element={<AdminPage />}>
          <Route path="movies" element={<MovieTable />} />
          <Route path="add-movies" element={<AddMoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
