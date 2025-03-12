// App.jsx

// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

// Import page_layout
import DefaultLayout from "./page_layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

function App() {

  // useState to handle moviesData  
  const [moviesData, setMoviesData] = useState([]);

  // FUNCTION to handle API request for Movies
  const fetchMoviesData = () => {
    axios.get(`http://localhost:3000/movies/`)
      .then((res) => setMoviesData(res.data))
      .catch((err) => console.error("Error fetching Movies data", err));
  };

  // Call fetchMoviesData
  useEffect(() => {
    fetchMoviesData();
  }, []);

  // RENDER
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* HomePage */}
          <Route path="/" element={<HomePage AppMoviesData={moviesData} />} />
          <Route path="movies/:id" element={<MovieDetail />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;