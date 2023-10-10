import styled from "styled-components";

import Switch from "react-switch";

export const Nav = styled.nav`
  max-width: 100vw;
  padding: 15px 0;

  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

  & > div {
    display: flex;
    align-items: center;
    flex-direction: row;
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
