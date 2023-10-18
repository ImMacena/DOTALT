import styled from "styled-components";

export const StyledPendentesCard = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: 0px 0px 3px #555;
`;

export const PendentesInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding-bottom: 0.5rem;

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

  & > div {
    margin-right: 0;
  }

  & h2 {
    margin: 0;
    font-size: 1.25rem;
    font-family: "Lato", sans-serif;
  }
`;
