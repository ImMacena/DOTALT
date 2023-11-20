import { useCallback, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import { ThemeContext } from "styled-components";

import { LogoBrand } from "../LogoBrand";
import { ActionBtn } from "../ActionBtn";
import { Container } from "../Container";

import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

import {
  ActionButtons,
  Nav,
  NavBarProfileImg,
  NavBarProfileOptions,
  NavLinks,
  StyledSwitch,
} from "./styles";

export const Navbar = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  const { signout, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogar = useCallback(() => navigate("/Login"), [navigate]);

  const handleCadastrar = useCallback(() => navigate("/Cadastro"), [navigate]);

  const [isOpen, setIsOpen] = useState("false");

  const handleIsOpen = useCallback(() => {
    isOpen === "true" ? setIsOpen("false") : setIsOpen("true");
  }, [isOpen, setIsOpen]);

  const handleSair = useCallback(() => {
    signout();
    navigate("/");
  }, [signout, navigate]);

  const { pathname } = useLocation();

  return (
    <Nav>
      <Container>
        <LogoBrand />

        {(pathname === "/" ||
          pathname === "/Contato" ||
          pathname === "/Empresas") && (
          <NavLinks>
            <Link to="/Empresas">Para Empresas</Link>
            <Link to="/Contato">Contate-nos</Link>
          </NavLinks>
        )}

        <ActionButtons>
          {title === "dark" ? <BsSunFill /> : <BsFillMoonFill />}

          <StyledSwitch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={true}
            uncheckedIcon={true}
            onColor={colors.background}
            offColor={colors.background}
            offHandleColor={colors.text}
            height={20}
            width={40}
            handleDiameter={18}
            alt="Trocar tema"
          />

          {user === null ? (
            <>
              <ActionBtn color={"primary"} action={handleLogar}>
                Logar
              </ActionBtn>

              <ActionBtn
                fill={"fill"}
                color={"primary"}
                action={handleCadastrar}
              >
                Cadastrar
              </ActionBtn>
            </>
          ) : (
            <>
              <NavBarProfileImg onClick={handleIsOpen}>
                <NavBarProfileOptions isopen={isOpen}>
                  {user?.userType === "Student" && user?.classes && (
                    <li>
                      <Link to="/Aluno">Turma: {user?.classes[0].name}</Link>
                    </li>
                  )}

                  {user?.userType === "Teacher" && (
                    <li>
                      <Link to="/Professor">Principal</Link>
                    </li>
                  )}

                  <li onClick={handleSair}>Sair</li>
                </NavBarProfileOptions>
              </NavBarProfileImg>

              {/* <ActionBtn color={"danger"} action={handleSair}>
                Sair
              </ActionBtn> */}
            </>
          )}
        </ActionButtons>
      </Container>
    </Nav>
  );
};
