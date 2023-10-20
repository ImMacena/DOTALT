import styled from "styled-components";

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  max-width: 50%;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0px 0px 3px #555;
`;

export const ProfileIcon = styled.div``;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & button {
    width: fit-content;
  }
`;
