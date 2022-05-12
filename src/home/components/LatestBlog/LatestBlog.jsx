import React, {useState, useEffect} from "react";
import { URL } from "../../../constants";
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Button from "../../../shared/components/UI/Button/Button";
import Description from "../../../shared/components/UI/Description/Description";
import ImageBox from "../../../shared/components/UI/ImageBox/ImageBox";
import Title from "../../../shared/components/UI/Title/Title";
import classed from "./LatestBlog.module.css";

const LatestBlog = (props) => {
  const [blog, setBlog ] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchBlog = async () => {
      let responseData;
      try {
        responseData = await sendRequest("/blog/6/1", "GET");
        setBlog(responseData.data.blog.docs);
        console.log(blog)
      } catch (err) {
        console.log(err);
      }
    }
    fetchBlog();
  }, [])
  return (
    <div className={`container-fluid ${classed.box}`}>
      <div className="container">
      <Title className={classed.title}>Latest Blog</Title>
      <div>
      <Slide easing="ease">
      {blog.map((post) => (
        <div className={classed.each_slide}>
          <div className="row">
            <div className="col-50">
              <ImageBox className={classed.imagebox} image={`${URL}/${post.image}`} title={post.title}>
                <div className="box">
                  <p>NIKE</p>
                </div>
                <div className="outline"></div>
              </ImageBox>
            </div>
            <div className={`col-50 ${classed.col}`}>
              <h3 className={classed.stitle}>{post.title}</h3>
              <Description>{post.description}</Description>
              <Button to={`/blog/${post._id}`} className={classed.button}>Read More</Button>
            </div>
          </div>
        </div>))}
        </Slide>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
