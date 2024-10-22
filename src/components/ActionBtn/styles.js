import styled, { css } from "styled-components";

export const StyledButton = styled.div`
  text-transform: uppercase;
  width: fit-content;
  min-width: 100px;
  padding: 10px;
  margin: 1.5rem 0;
  text-align: center;

  font-size: 1rem;
  font-weight: 600;
  font-family: "Exo 2";
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  border: 3px solid ${({ theme, color }) => theme.colors[color]};
  background: ${({ fill, theme, color }) =>
    fill === "fill" ? theme.colors[color] : "none"};

  ${({ disabled }) => {
    if (disabled === true) {
      return css`
        opacity: 0.5;
      `;
    }
  }}

  &:hover {
    ${({ disabled }) => {
      if (disabled === true) {
        return css`
          cursor: default;
        `;
      } else {
        return css`
          cursor: pointer;
        `;
      }
    }}

    filter: saturate(1.25);
  }
`;
