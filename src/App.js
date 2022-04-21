import Home from "./home/page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
