import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import { useStore } from "./shared/hooks/store-hook";

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

import Login from "./user/pages/Login";
import JoinUs from "./user/pages/JoinUs";
import ChangePassword from "./user/pages/changePassword";
import User from "./user/pages/User";

import Message from "./user/pages/Message";
import Messages from "./user/pages/Messages";

import Bag from "./shop/pages/Bag";

import "./App.css";

function App() {
  const {
    bag,
    inBag,
    token,
    total,
    subtotal,
    getItems,
    updateItem,
    addItem,
    deleteItem,
    login,
    logout,
    user_id,
    isLoggedIn,
    role,
  } = useAuth();

  axios.defaults.baseURL = URL + "/api";
  axios.defaults.headers = { Authorization: "Bearer " + token };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        user_id: user_id,
        role: role,
        login: login,
        logout: logout,
        inBag: inBag,
        subtotal: subtotal,
        total: total,
        bag: bag,
        addItem: addItem,
        removeItem: deleteItem,
        updateItem: updateItem,
        getItems: getItems,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          {isLoggedIn && <Route path="/blog/new" element={<NewPost />} />}
          {isLoggedIn && <Route path="/blog/:pid" element={<Post />} />}
          {isLoggedIn && (
            <Route path="/blog/edit/:pid" element={<UpdatePost />} />
          )}

          <Route path="/about" element={<About />} />
          <Route path="/suport" element={<Suport />} />

          <Route path="/shop/:item_id" element={<Products />} />
          <Route path="/product/:item_id" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/login" element={<Login />} />
          <Route path="/join-us" element={<JoinUs />} />
          {isLoggedIn && (
            <Route path="/change-password" element={<ChangePassword />} />
          )}
          {isLoggedIn && <Route path="/user" element={<User />} />}

          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:message_id" element={<Message />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
