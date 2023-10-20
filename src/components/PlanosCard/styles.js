import styled from "styled-components";

export const StyledPlanosCard = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 300px;
  box-shadow: 0px 0px 3px #555;
  border-radius: 5px;
  text-align: center;
  padding: 1rem;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};

  & h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  & h3 {
    font-size: 1.75rem;
  }

  & h3::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    margin-top: 0.5rem;
  }

  & h3 span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const VantagensList = styled.ul`
  list-style: none;
  margin: 1.5rem 0;

  & li {
    text-align: start;
    padding: 0.5rem 0;
    font-weight: 600;
    font-family: "Lato";

    display: flex;
    justify-content: row;

    & svg {
      flex: 1;
      max-width: 25px;
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 0.5rem;
    }

    & p {
      flex: 1;
    }

    & span {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`;
