import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "../../../shared/components/UI/Description/Description";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import Title from "../../../shared/components/UI/Title/Title";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import date from 'date-and-time';
import ImageView from "../../../shared/components/ImageView/ImageView";

import classed from "./Post.module.css";

const Post = () => {
  let { pid } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let data = await sendRequest(`/blog/${pid}`, "GET");
        setPost(data.data.existingPost);
        console.log(post)
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        {error && <p>{error.message}</p>}
        {isLoading && <LoadingSpinner error={error} onClear={clearError}/>}
        {!isLoading && (
          <div className="row">
            <div className={`col-50 ${classed.image}`}>
              {!post.image && post.image === "undefined" && <LoadingSpinner/>}
              {post.image && <ImageView images={post.image} />}
            </div>
            <div className={`col-50 ${classed.description}`}>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <p>Time: {date.format(new Date(post.date_time), 'HH:mm:ss DD/MM/YYYY')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
