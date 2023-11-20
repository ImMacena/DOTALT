import styled, { css } from "styled-components";

export const LoginContainer = styled.section``;

export const LoginContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;

  width: 100%;
  min-height: calc(100vh - 65px);
`;

export const LoginForm = styled.form`
  flex: 1;
  text-align: center;

  height: 100%;
  width: 100%;
  padding: 0 3rem;

  & h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & button {
    margin: 1rem auto;
  }
`;

export const ChooseUser = styled.div`
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: row;

    list-style: none;
    width: 100%;
  }
`;

export const ChooseUserOpt = styled.div`
  flex: 1;

  font-weight: bold;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  ${({selected, theme}) => {
    if (selected) {
      return css`
        border: 1px solid ${theme.colors.primary};
        box-shadow: 0px 0px 3px #555;
      `;
    }
  }}
`;

export const LoginImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;

  & img {
    width: 80%;
  }
`;

export const LoginActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: start;
  width: 100%;
  margin-bottom: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
  }

  & input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  & label {
    margin-left: 0.5rem;
    cursor: pointer;
  }

  & a {
    color: ${({ theme }) => theme.colors.secondary};
    float: right;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginGoogle = styled.button`
  padding: 0.75rem;
  font-family: "Exo 2";
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 20px;

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
