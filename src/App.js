
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Definitions from "./pages/Definitions/Definitions";
import Internet from "./pages/Internet/Internet";
import './App.css';

function App() {
  return (
   
    <>
    <Routes>
   


      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="definitions" element={<Definitions />} />
        <Route path="internet" element={<Internet />} />
      </Route>
      
    </Routes>
  </>

  );
}

export default App;
