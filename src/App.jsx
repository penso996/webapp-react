// App.jsx

// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page_layout
import DefaultLayout from "./page_layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

function App() {

  // RENDER
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="movies/:id" element={<MovieDetail />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;