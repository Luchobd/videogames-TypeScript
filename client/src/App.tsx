import { Routes, Route } from "react-router-dom";
import { CreateVideogame } from "./components/CreateVideogame";
import { DetailVideogames } from "./components/DetailVideogames";

import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:id"} element={<DetailVideogames />} />
      <Route path={"/videogame"} element={<CreateVideogame />} />
    </Routes>
  );
}

export default App;
