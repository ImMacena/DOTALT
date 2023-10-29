import styled from "styled-components";

export const TurmasContainer = styled.section`
  min-height: calc(100vh - 65px);
`;

export const TurmasContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  width: 100%;
`;

export const TurmasList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  list-style: none;
  width: 35%;
`;

export const Turma = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TurmasChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 65%;
  height: 70vh;
  padding: 0.75rem;
  max-height: 500px;
  box-shadow: 0px 0px 5px #555;
  border-radius: 5px;

  & h3 {
    text-align: center;
  }
`;

export const TurmasChat = styled.div`
  flex: 1;
  border-top: 1px solid #555;
  padding: 1rem 0.5rem;
`;

export const ChatMessageArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${({theme}) => theme.colors.secondary};
    border: 1px solid ${({theme}) => theme.colors.text};
    color: ${({theme}) => theme.colors.text};
    padding: 0 0.5rem;
    border-radius: 5px;
    height: 100%;
    margin-left: -2rem;
  }

  & div:hover {
    cursor: pointer;
  }

  & textarea {
    flex: 1;
    height: fit-content;

    padding: 0.5rem;
    font-size: 1.1rem;
    font-family: "Exo 2";
    outline: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    resize: none;
  }
`;

export const TurmaInfoContainer = styled.div``;
