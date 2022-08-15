import { Routes, Route } from "react-router-dom";
import "./App.css";
import SectionsList from "./pages/sections-list/sections-list.component";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SectionsList />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
