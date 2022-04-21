import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

import Home from "./home/page/Home";
import Blog from "./blog/page/Blog";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
