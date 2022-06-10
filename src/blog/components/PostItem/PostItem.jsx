import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import { ServerLink } from "../../../constants";
import { AuthContext } from "../../../shared/context/auth-context";
import noImg from "../../../shared/images/noImg.jpg"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import classed from "./PostItem.module.css";

const PostItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div key={props.id} className={`post ${classed.post}`}>
      <div className={classed.image}>
        {props.image && props.image.length > 0 ? <img src={`${ServerLink}/${props.image[0]}`} alt={props.names}/> : <img src={noImg} />}
        
        {!props.image && <img src={noImg} />}
      </div>
      <h2>{props.title}</h2>
      <div className={classed.buttons}>
        {auth.role === 1 && <button type="button" onClick={() => {props.handlerDelete(props.id)}} className={classed.box}><AiOutlineDelete /></button>}
        {auth.role === 1 && <Link to={`/blog/edit/${props.id}`}><AiOutlineEdit /></Link>}
        <Link to={`/blog/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostItem;
