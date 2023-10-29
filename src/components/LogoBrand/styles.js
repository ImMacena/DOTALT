import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};

  & img {
    width: 50px;
  }

  & h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
