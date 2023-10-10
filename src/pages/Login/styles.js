import styled from "styled-components";

export const LoginContainer = styled.section``;

export const LoginContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;

  width: 100%;
  min-height: 90vh;
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
    margin: 1rem 0;
  }
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
