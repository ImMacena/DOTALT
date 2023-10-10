import { Link } from "react-router-dom";

import { Brand } from "./styles";

import LogoImg from "../../assets/Logo.png";

export const LogoBrand = () => {
  return (
    <Link to="/">
      <Brand>
        <img src={LogoImg} alt="Logo do grupo DOTALT" />
        <h1>DOTALT</h1>
      </Brand>
    </Link>
  );
};
