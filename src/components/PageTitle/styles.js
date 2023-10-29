import styled from "styled-components";

export const StyledPageTitle = styled.div`
  display: flex;
  align-items: center;

  padding: 1.5rem 0;
  
  & h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  &::before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
