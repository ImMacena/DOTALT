import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  ${({ pleft }) => {
    if (pleft === "true") {
      return css`
        padding-left: calc(1rem + 65px);
      `;
    }
  }};
`;
