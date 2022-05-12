import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { Link } from "react-router-dom";

import PostItem from "../components/PostItem/PostItem";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner/LoadingSpinner";

import classed from "./Blog.module.css";

const Blog = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      let responseData;
      try {
        responseData = await sendRequest("/blog/10/1", "GET");
        setBlog(responseData.data.blog.docs);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBlog();
  }, []);

  const handlerDelete = (pid) => {
    sendRequest(`blog/${pid}`, "delete");
    setBlog(blog.filter((p) => { if(p._id !== pid) return p;}))
  }

  return (
    <div className="container-fluid">
      <div className="container">
        
        <div className={classed.container}>
          <div className="row">
            <div className="col-50"><h1>BLOG</h1></div>
            {auth.isLoggedIn && auth.role == 1 && <div className="colo-50"><Link to="/blog/new" className="newpost" >New</Link></div>}
          </div>
        </div>
        {isLoading && <LoadingSpinner error={error} onClear={clearError}/>}
        {!isLoading && <div className="posts">
          {blog.map((post, index) => (
            <PostItem key={index} id={post._id} title={post.title} description={post.description} image={post.image} handlerDelete={handlerDelete}/>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Blog;
