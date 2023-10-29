import styled from "styled-components";

export const AtividadesContainer = styled.section`
  min-height: calc(100vh - 75px);
`;

export const AtividadesNav = styled.nav`
  & ul {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    list-style: none;
    padding-bottom: 1rem;
    border-bottom: 1px solid #555;
  }

  & ul li {
    transition: font-weight 0.25s ease-in-out;
    padding-bottom: 0.25rem;
  }

  & ul li:hover {
    font-weight: 600;
    cursor: pointer;
  }

  & li.selected {
    font-weight: 600;
    border-bottom: 2px solid ${({theme}) => theme.colors.secondary};
  }
`;

export const AtividadesListContainer = styled.div`
  & p {
    margin: 2rem 0;
  }
`;
