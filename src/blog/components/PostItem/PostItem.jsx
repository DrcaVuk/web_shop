import React, { useContext } from "react";
import Button from "../../../shared/components/UI/Button/Button";
import { ServerLink } from "../../../constants";
import { AuthContext } from "../../../shared/context/auth-context";
import classed from "./PostItem.module.css";
import noImg from "../../../shared/images/noImg.jpg"


const PostItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div key={props.id} className={`post ${classed.post}`}>
      <div className={classed.image}>
        {props.image && props.image.length > 0 ? <img src={`${ServerLink}/${props.image[0]}`} alt={props.names}/> : <img src={noImg} />}
        
        {!props.image && <img src={noImg} />}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="buttons">
        {auth.role === 1 && <Button type="button" onClick={() => {props.handlerDelete(props.id)}} className={classed.box}>Delete</Button>}
        {auth.role === 1 && <Button to={`/blog/edit/${props.id}`}>Edit</Button>}
        <Button to={`/blog/${props.id}`}>Read More</Button>
      </div>
    </div>
  );
};

export default PostItem;
