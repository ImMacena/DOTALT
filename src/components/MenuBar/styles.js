import styled from "styled-components";

export const StyledMenuBar = styled.div`
  position: fixed;
  left: calc(-250px + 65px);
  bottom: 0;

  height: calc(100vh - 75px);
  width: 250px;
  margin-right: 250px;
  z-index: 999;

  transition: all 0.25s ease-in-out;

  &:hover {
    left: 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 2px solid ${({ theme }) => theme.colors.primary};

  & li {
    display: flex;
    flex-direction: column;

    transition: all 0.25s ease-in-out;
  }

  & li:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & li div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 1rem;
    width: 100%;
    height: 35px;
    cursor: pointer;
  }

  & li div svg {
    width: 35px;
    margin: 0 15px;
  }
`;
