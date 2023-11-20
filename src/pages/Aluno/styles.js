import styled from "styled-components";

import guilherme from "../../assets/guilherme.png";

export const AlunoContainer = styled.section`
  padding-bottom: 8rem;
`;

export const AlunoQuickAccess = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  width: 100%;
  padding-bottom: 2rem;
`;

export const Pendentes = styled.div`
  padding: 3rem 0;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  &::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
  }
`;

export const PendentesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  list-style: none;
`;

export const Desempenho = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;

  padding: 3rem 0;
`;

export const DesempenhoResumo = styled.div`
  flex: 1;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    box-shadow: 0px 0px 3px #555;
    height: 220px;
    text-align: center;
    font-weight: bold;
    padding: 0 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    h2 {
      font-size: 5rem;
      margin-top: -20px;
    }
  }
`;

export const AtivEntregues = styled.div`
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AtivPendentes = styled.div`
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const AtivNaoEntregues = styled.div`
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const DesempenhoArmazenamento = styled.div`
  flex: 1;

  & span {
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 1rem !important;
    font-weight: 700 !important;
  }

  & h2 {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
  }

  & h2::before {
    margin-right: 0;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 0px 3px #555;
    height: 220px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
  }
`;


export const StyledProfileCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  max-width: 60%;
  /* border: 1px solid red; */
  padding: 1rem;
`;

export const ProfileIcon = styled.div`
  width: 10rem !important;
  height: 10rem;
  border-radius: 100%;
  border: 3px solid ${({theme}) => theme.colors.text};
  background-image: url(${guilherme});
  background-position: center;
  background-size: cover;
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  & p {
    color: ${({theme}) => theme.colors.secondary};
  }

  & > div {
    margin: 0;
  }
`;

