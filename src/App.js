import { Route, BrowserRouter, Routes } from "react-router-dom";

import Page from "./pages";
import BuildMenu from "./pages/buildMenu/BuildMenu";
import AllDishes from "./pages/AllDishes/AllDishes";
import Dish from "./pages/AllDishes/Dish";

function App({ data }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="/" element={<AllDishes />}>
              <Route path="/:id" element={<Dish />} />
            </Route>
            <Route path="build" element={<BuildMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
