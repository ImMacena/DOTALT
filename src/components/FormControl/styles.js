import styled from "styled-components";

export const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;
  margin: 1rem 0;

  & label {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  & label::after {
    content: "*";
    color: red;

    display: ${({ isRequired }) => {
      if (isRequired) {
        return "inline-block";
      } else {
        return "none";
      }
    }};
  }

  & input {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};

    transition: all 0.25s ease-in;
  }

  & input:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
