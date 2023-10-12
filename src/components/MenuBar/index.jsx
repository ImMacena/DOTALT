import {
  BsPeople,
  BsClipboard,
  BsFileEarmarkPlus,
  BsBook,
} from "react-icons/bs";
import { PiBackpackLight } from "react-icons/pi";

import { MenuList, StyledMenuBar } from "./styles";

export const MenuBar = () => {
  return (
    <StyledMenuBar>
      <MenuList>
        <li>
          <div>
            <h3>MATÉRIAS</h3>
            <BsPeople size={35} />
          </div>
        </li>

        <li>
          <div>
            <h3>ATIVIDADES</h3>
            <BsClipboard size={35} />
          </div>
        </li>

        <li>
          <div>
            <h3>MOCHILA</h3>
            <PiBackpackLight size={35} />
          </div>
        </li>

        <li>
          <div>
            <h3>CONTEÚDO</h3>
            <BsBook size={35} />
          </div>
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
