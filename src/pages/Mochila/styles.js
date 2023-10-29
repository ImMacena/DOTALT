import styled from "styled-components";

export const MochilaContainer = styled.section``;

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
  height: 90vh;

  & p {
    margin: 2rem 0;
  }
`;
