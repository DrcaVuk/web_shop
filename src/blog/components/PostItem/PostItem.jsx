import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import { URL } from "../../../constants";
import { AuthContext } from "../../../shared/context/auth-context";
import classed from "./PostItem.module.css";
import noImg from "../../../shared/images/noImg.jpg"


const PostItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div key={props.id} className={`post ${classed.post}`}>
      <div className={classed.image}>
        {props.image && <img src={`${URL}/${props.image}`} alt={props.names}/>}
        {!props.image && <img src={noImg} />}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        {auth.role === 1 && <Button type="button" onClick={() => {props.handlerDelete(props.id)}} className={classed.box}>Delete</Button>}
        {auth.role === 1 && <Link to={`/blog/edit/${props.id}`}>Edit</Link>}
        <Link to={`/blog/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostItem;
