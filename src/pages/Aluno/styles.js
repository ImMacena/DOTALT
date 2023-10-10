import styled from "styled-components";

export const AlunoContainer = styled.section`
  padding-bottom: 8rem;
`;

export const AlunoQuickAccess = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  padding-bottom: 2rem;
`;

export const Pendentes = styled.div`
  margin: 3rem 0;
  min-height: 50vh;
  
  & h2 {
    margin-bottom: 1.5rem;
  }

  & > h2::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.primary};
    margin-right: 1rem ;
  }
`;

export const PendentesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  list-style: none;
`;
