import { Link } from "react-router-dom";

import "./Logo.css";

import LogoImg from "../../../images/Logo.png";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src={LogoImg} alt="Logo" />
    </Link>
  );
};

export default Logo;
