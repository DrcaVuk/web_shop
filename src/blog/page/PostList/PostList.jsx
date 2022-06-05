import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import AdminTools from "../../../shared/components/Tools/Tools";
import PostItem from "../../components/PostItem/PostItem";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

import classed from "./PostList.module.css";

const BlogList = () => {
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
    };
    fetchBlog();
  }, [sendRequest]);

  const handlerDelete = async (pid) => {
    try {
      await sendRequest(`blog/${pid}`, "DELETE");
      setBlog(
        blog.filter((p) => {
          if (p._id !== pid) return p;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className={classed.container}>
          <AdminTools role={auth.role} title="BLOG" />
        </div>
        {isLoading && <LoadingSpinner error={error} onClear={clearError} />}
        {!isLoading && (
          <div className="posts">
            {blog.map((post, index) => (
              <PostItem
                key={index}
                id={post._id}
                title={post.title}
                description={post.description}
                image={post.image}
                handlerDelete={handlerDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;