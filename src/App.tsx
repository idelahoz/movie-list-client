import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>
      </header>
      <div className="container App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/:movieId" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
