import React from "react";
import Validation from "./components/Validation/Validation";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import NotAdmin from "./pages/NotAdmin";
import Clock from "./components/Clock/Clock";
import MoviesCard from "./components/MoviesCard/MoviesCard"
import Result from "./components/Result/Result";
import Cats from './components/Cats/Cats'
import UseEffectExample from './components/UseEffectExample/UseEffectExample'
import RefExample from './components/RefExample/RefExample'
import ListMovies from './components/ListMovies/ListMovies'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Validation />} />
        <Route path="admin" element={<Admin />} />
        <Route path="notadmin" element={<NotAdmin />} />
      </Routes>
      <Clock/>
      <MoviesCard/>
      <Result/>
      <Cats/>
      <Validation/>
      <UseEffectExample/>
      <RefExample/>
      <ListMovies/>
    </div>
  );
}

export default App;
