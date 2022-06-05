import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

import { ServerLink } from "./constants";

import MainHeader from "./shared/components/Navigation/MainHeader";
import Footer from "./shared/components/Footer/Footer";

import Home from "./home/page/Home";
import BlogList from "./blog/page/PostList/PostList";
import NewPost from "./blog/page/NewPost/NewPost";
import UpdatePost from "./blog/page/UpdatePost/UpdatePost";
import Post from "./blog/page/Post/Post";
import About from "./about/page/About";
import Suport from "./support/page/Suport";
import ContactUs from "./contact-us/page/ContactUs";

import Products from "./shop/pages/Products/Products";
import Product from "./shop/pages/Product/Product";
import NewProduct from "./shop/pages/NewProduct/NewProduct";
import UpdateProduct from "./shop/pages/UpdateProduct/UpdateProduct";

import Login from "./user/pages/Login/Login";
import JoinUs from "./user/pages/JoinUs/JoinUs";
import ChangePassword from "./user/pages/ChangePassword/ChangePassword";
import User from "./user/pages/User/User";

import Message from "./user/pages/Message/Message";
import Messages from "./user/pages/Messages/Messages";
import NewslatterList from "./user/pages/NewslatterList/NewslatterList";
import Newslatter from "./user/pages/Newslatter/Newslatter";
import Bag from "./shop/pages/Bag/Bag";

import "./App.css";

function App() {
  const {
    bag,
    inBag,
    token,
    subtotal,
    total,
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

  axios.defaults.baseURL = ServerLink + "/api";
  axios.defaults.headers = { Authorization: "Bearer " + token,};
  axios.defaults.headers.addItem = {"Content-Type": "multipart/form-data"};


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
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:pid" element={<Post />} />
          {isLoggedIn && <Route path="/blog/new" element={<NewPost />} />}
          {isLoggedIn && (
            <Route path="/blog/edit/:pid" element={<UpdatePost />} />
          )}

          <Route path="/about" element={<About />} />
          <Route path="/suport" element={<Suport />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/product/update/:item_id" element={<UpdateProduct />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/shop/:category" element={<Products />} />
          <Route path="/product/:item_id" element={<Product />} />

          <Route path="/login" element={<Login />} />
          <Route path="/join-us" element={<JoinUs />} />
          {isLoggedIn && (
            <Route path="/change-password" element={<ChangePassword />} />
          )}
          {isLoggedIn && <Route path="/user" element={<User />} />}

          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:message_id" element={<Message />} />
          <Route path="/bag" element={<Bag />} />

          <Route path="/newslatter/list" element={<NewslatterList/>} />
          <Route path="/newslatter" element={<Newslatter/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
