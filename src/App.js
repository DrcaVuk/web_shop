import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

import Home from "./home/page/Home";
import Blog from "./blog/page/Blog";
import About from "./about/page/About";
import Suport from "./support/page/Suport";
import Product from "./shop/pages/product/Product";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/suport" element={<Suport/>}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
