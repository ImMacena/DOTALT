import styled from "styled-components";

export const StyledHomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  position: relative;
  min-height: 300px;
  width: 230px;
  padding: 1.5rem 0.5rem;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 1px 1px 5px #9f9f9f;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
`;
