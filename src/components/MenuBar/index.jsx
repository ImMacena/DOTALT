import {
  BsPeople,
  BsClipboard,
  BsFileEarmarkPlus,
  BsBook,
  BsHouse,
} from "react-icons/bs";

import { PiBackpackLight } from "react-icons/pi";

import { Link } from "react-router-dom";

import { MenuList, StyledMenuBar } from "./styles";

export const MenuBar = () => {
  return (
    <StyledMenuBar>
      <MenuList>
        <li>
          <Link to="/Aluno">
            <div>
              <h3>PRINCIPAL</h3>
              <BsHouse size={35} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/Turmas">
            <div>
              <h3>TURMAS</h3>
              <BsPeople size={35} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/Atividades">
            <div>
              <h3>ATIVIDADES</h3>
              <BsClipboard size={35} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/Mochila">
            <div>
              <h3>MOCHILA</h3>
              <PiBackpackLight size={35} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/Conteudos">
            <div>
              <h3>CONTEÚDOS</h3>
              <BsBook size={35} />
            </div>
          </Link>
        </li>

        <li>
          <div>
            <h3>COMPLEMENTAR</h3>
            <BsFileEarmarkPlus size={35} />
          </div>
        </li>
      </MenuList>
    </StyledMenuBar>
  );
};
