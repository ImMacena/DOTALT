import styled from "styled-components";

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  max-width: 50%;
  border: 1px solid #000;
  padding: 1.5rem;
`;

export const ProfileIcon = styled.div``;

export const ProfileDesc = styled.div``;
