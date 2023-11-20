import styled from "styled-components";

export const MochilaContainer = styled.section`
  min-height: calc(100vh - 60px);
  padding-bottom: 8rem;
`;

export const MochilaForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #555;

  & div:last-child {
    margin-bottom: 1.1rem;
  }
`;

export const MochilaFormInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;

  & div {
    flex: 1;
    width: 400px;
  }
`;

export const MochilaFilesList = styled.div`
  list-style: none;
  margin-top: 2rem;

  & h3 {
    font-size: 1.35rem;
  }

  & li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0px 0px 3px #555;
    border-radius: 5px;
  }

  & span {
    color: ${({theme}) => theme.colors.secondary};
  }

  & svg {
    color: ${({ theme }) => theme.colors.danger};
    cursor: pointer;
    font-size: 1.5rem;
  }

  & div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  & div:last-child div {
    margin: 0;
  }
`;
