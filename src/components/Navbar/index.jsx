import { useCallback, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import { ThemeContext } from "styled-components";

import { LogoBrand } from "../LogoBrand";
import { ActionBtn } from "../ActionBtn";
import { Container } from "../Container";

import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

import { ActionButtons, Nav, NavLinks, StyledSwitch } from "./styles";

export const Navbar = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  const { signout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogar = useCallback(() => navigate("/Login"), [navigate]);

  const handleCadastrar = useCallback(() => navigate("/Cadastro"), [navigate]);

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

          {pathname === "/" ||
          pathname === "/Contato" ||
          pathname === "/Empresas" ||
          pathname === "/Login" ||
          pathname === "/Cadastro" ? (
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
            <ActionBtn color={"danger"} action={handleSair}>
              Sair
            </ActionBtn>
          )}
        </ActionButtons>
      </Container>
    </Nav>
  );
};
