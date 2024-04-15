import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MiContexto from "./MiContexto";
import { useState,useEffect } from "react";
const PHOTO_URL = "/photos.json";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import "./App.css";


const App = () => {

  const [fotos, setFotos] = useState([])
  
  useEffect(() => {
    fetchFotos()
  }, [])

  const fetchFotos = async () => {
    try {
      const response = await fetch(PHOTO_URL)
      if (!response.ok) {
        throw new Error('No se puedo conectar con la API')
      }
      const data = await response.json()
      setFotos(data.photos)
    } catch (error) {
      console.error('Error al obtener las fotos:', error);
    }
  }

  const sharestate = { fotos, setFotos }

  return (
    <div>
      <MiContexto.Provider value={sharestate}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </MiContexto.Provider>
    </div>
  );
};
export default App;
