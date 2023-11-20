import styled, { css } from "styled-components";

import Switch from "react-switch";

import guilherme from "../../assets/guilherme.png";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;

  z-index: 999;
  width: 100vw;
  height: 65px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

  & > div {
    display: flex;
    align-items: center;
    flex-direction: row;

    padding-top: 0px !important;
  }
`;

export const NavLinks = styled.div`
  margin: 0 2rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;

  font-size: 1rem;
  font-weight: 600;

  & a {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ActionButtons = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledSwitch = styled(Switch)`
  border: 2px solid ${({ theme }) => theme.colors.text};
`;

export const NavBarProfileImg = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-image: url(${guilherme});
  background-position: center;
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const NavBarProfileOptions = styled.ul`
  ${({ isopen }) => {
    if (isopen === "true") {
      return css`
        display: flex;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}

  flex-direction: column;
  gap: 1rem;
  text-align: center;
  float: right;
  margin-top: 55px;
  list-style: none;
  padding: 1rem 0.5rem;
  min-width: 175px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  & li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.25s ease-in-out;
  }
  & li a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & li:last-child {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.danger};
    padding: 0.5rem 0;
    border-radius: 5px;
  }
`;
