import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"; 

import { URL } from "./constants";

import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

import Home from "./home/page/Home";
import Blog from "./blog/page/Blog";
import NewPost from "./blog/page/NewPost";
import UpdatePost from "./blog/page/UpdatePost";
import Post from "./blog/page/Post";
import About from "./about/page/About";
import Suport from "./support/page/Suport";
import Products from "./shop/pages/product/Products";
import Product from "./shop/pages/product/Product";
import ContactUs from "./contact-us/page/ContactUs";

import "./App.css";

function App() {
  axios.defaults.baseURL =  URL + "/api";
  axios.defaults.headers = { Authorization: "Bearer " + 2 };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/new" element={<NewPost/>} />
        <Route path="/blog/:pid" element={<Post/>} />
        <Route path="/blog/edit/:pid" element={<UpdatePost />} />

        <Route path="/about" element={<About/>} />
        <Route path="/suport" element={<Suport/>}/>

        <Route path="/shop/:item_id" element={<Products />}/>
        <Route path="/product/:item_id" element={<Product/>} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
