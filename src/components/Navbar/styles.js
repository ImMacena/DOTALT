import styled from "styled-components";

import Switch from "react-switch";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;

  z-index: 999;
  width: 100vw;
  height: 85px;
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
