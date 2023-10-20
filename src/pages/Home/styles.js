import styled, { css } from "styled-components";

import HeroImg from "../../assets/HeroImg.jpg";

export const HomeHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 65vh;

  display: flex;
  align-items: center;
`;

export const HomeTitle = styled.div`
  color: #fff;

  & h1 {
    font-weight: bold;
    font-size: 4.5rem;
  }

  & h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HomeContent = styled.section`
  position: relative;
  padding-bottom: 4rem;
  margin-bottom: 5rem;
`;

export const HomeContentTitle = styled.h1`
${({ text }) => {
  if (text === "center") {
    return css`
        text-align: center;
        max-width: 500px;
        margin: 2rem auto 0 auto;

        &::after {
          content: "";
          display: block;
          height: 10rem;
          width: 2px;
          background-color: ${({theme}) => theme.colors.secondary};
          margin: 2rem auto -6rem auto;
          border-radius: 10px;
        }
      `;
    } else {
      return css`
        text-align: start;
        margin: 2rem 0;
      `;
    }
  }};
`;

export const HomeDescs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin: 2rem 0;
`;

export const HomeDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ side }) => side};
  max-width: 450px;

  & img {
    justify-content: end;
    max-width: 75px;
    margin: 0 auto 1rem auto;
  }
`;

export const HomeCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-top: 5rem;

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 230px;
    height: 5px;
    margin: 6rem auto;
    display: block;
    border-radius: 10px;
  }
`;

export const Triangle = styled.img`
  position: absolute;
  bottom: 0rem;
  left: -1rem;
  z-index: -1;
  
  display: none; // Ainda precisa de manunteção.

  &:last-child {
    bottom: 1.5rem;
    left: -4rem;
  }
`;
