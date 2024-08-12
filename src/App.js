
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Files from "./Components/Files";
import { About } from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
    <div >
    <Header/>
    <Routes>
      <Route path="/"element ={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts"element={<Contacts/>}/>
      <Route path="/files"element={<Files/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
