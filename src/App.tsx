import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPokemons from "./pages/allPokemons";
import { SinglePokemon } from "./pages/singlePokemon";
import "./App.css";

// TODO: use arrow functions
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO: use Routes constants */}
          <Route path="/" element={<AllPokemons />} />
          <Route path="/pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
