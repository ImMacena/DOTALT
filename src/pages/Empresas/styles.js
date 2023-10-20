import styled from "styled-components";

export const EmpresasContainer = styled.section`
  padding-bottom: 8rem;
`;

export const Planos = styled.div`
  & h1 {
    text-align: center;
    font-size: 2rem;
    padding: 2rem 0;
  }
`;

export const ListaPlanos = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;
  list-style: none;
`;
