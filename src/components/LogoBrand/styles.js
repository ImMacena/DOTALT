import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};

  & img {
    width: 60px;
  }

  & h1 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
