import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import { URL } from "../../../constants";
import classed from "./PostItem.module.css";
import noImg from "../../../shared/images/noImg.jpg"


const PostItem = (props) => {
  
  return (
    <div key={props.id} className={`post ${classed.post}`}>
      <div className={classed.image}>
        {props.image && <img src={`${URL}/${props.image}`} />}
        {!props.image && <img src={noImg} />}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <Button onClick={() => {props.handlerDelete(props.id)}} className={classed.box}>Delete</Button>
        <Link to={`/blog/edit/${props.id}`}>Edit</Link>
        <Link to={`/blog/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostItem;
