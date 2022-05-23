import React from "react";
import { Link } from "react-router-dom";
import Title from "../UI/Title/Title";

import "./AdminTools.css";

const AdminTools = (props) => {
  return (
    <div className="admin-tools">
      <div className="title">
        <Title>{props.title}</Title>
      </div>
      {props.role === 1 &&<div className="tools">
        <Link to="/blog/new" className="newpost">
          New
        </Link>
      </div>}
    </div>
  );
};

export default AdminTools;
