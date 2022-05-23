import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

import AdminTools from "../../shared/components/AdminTools/AdminTools";
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
        console.log(blog)
      } catch (err) {
        console.log(err);
      }
    }
    fetchBlog();
  }, []);

  const handlerDelete = async (pid) => {
    console.log("PIDL: ")
    let data = await sendRequest(`blog/${pid}`, "DELETE");
    setBlog(blog.filter((p) => { if(p._id !== pid) return p;}))
  }

  return (
    <div className="container-fluid">
      <div className="container">
        
        <div className={classed.container}>
          <AdminTools role={auth.role} title="BLOG" />
         
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
