import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Register from "./pages/register/register.component";
import SectionsList from "./pages/sections-list/sections-list.component";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<SectionsList />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/signin" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
