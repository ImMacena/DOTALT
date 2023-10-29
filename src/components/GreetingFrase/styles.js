import styled from "styled-components";

export const StyledGreeting = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 2rem 0;
  margin-bottom: 1rem;

  & span {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
