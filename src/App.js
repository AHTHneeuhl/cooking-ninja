import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/create' element={<Create />} exact />
          <Route path='/recipes/:id' element={<Recipe />} exact />
          <Route path='/search' element={<Search />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
