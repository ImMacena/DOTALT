import styled from "styled-components";

export const StyledPendentesCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: 0px 0px 5px #555;
`;

export const PendentesInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & p {
    font-weight: 700;
  }

  & span {
    font-weight: 500;
  }
`;

export const PendentesTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & h2 {
    margin: 0;
    font-size: 1.4rem;
  }
`;
