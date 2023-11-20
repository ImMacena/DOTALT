import styled from "styled-components";

export const StyledActionCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;

  padding: 1rem;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0px 0px 3px #555;

  & p {
    color: ${({theme}) => theme.colors.text};
  }

  &:hover {
    cursor: pointer;
  }
`;
