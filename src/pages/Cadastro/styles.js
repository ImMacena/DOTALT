import styled from "styled-components";

export const CadastroContainer = styled.section``;

export const CadastroContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  width: 100%;
  min-height: calc(100vh - 75px);
`;

export const CadastroForm = styled.form`
  flex: 1;
  text-align: center;

  height: 100%;
  width: 100%;
  padding: 3rem;

  & h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & button {
    margin: 1rem 0;
  }
`;

export const CadastroImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 75px);
  width: 100%;

  & img {
    width: 90%;
  }
`;

export const CadastroActions = styled.div`
  display: flex;
  align-items: center;
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
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CadastroGoogle = styled.button`
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
