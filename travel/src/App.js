// import logo from './logo.svg';
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Mode from "./pages/Mode"

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mode-choice" element={<Mode />} />

    </Routes>
    <Footer/>

    </>
  );
}

export default App;
