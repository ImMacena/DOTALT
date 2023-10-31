import styled from "styled-components";

import ResourceCardImgAluno from "../../assets/ResourceCardImgAluno.png";
import ResourceCardImgProf from "../../assets/ResourceCardImgProf.png";

export const StyledResourcesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  width: 100%;
`;

export const StyledResourcesCard = styled.div`
  background: linear-gradient(#0000, rgba(0, 0, 0, 0.2)),
    url(${ResourceCardImgAluno});

  &:last-child {
    background: linear-gradient(#0000, rgba(0, 0, 0, 0.2)),
      url(${ResourceCardImgProf});
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  position: relative;
  height: 275px;
  width: calc(50% - 1.5rem);
  box-shadow: 1px 1px 5px #9f9f9f;
  border-radius: 5px;

  transition: all 0.25s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  &:hover div {
    gap: 1.5rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1rem;

    position: absolute;
    bottom: 0.5rem;
    left: 2rem;
    color: #fff;

    transition: all 0.25s ease-in;
  }

  & div svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
