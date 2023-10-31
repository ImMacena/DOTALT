import styled, { css } from "styled-components";

import HeroImg from "../../assets/HeroImg.jpg";
import HomeBannerImg from "../../assets/HomeBannerImg.jpg";
import HomePhraseImg from "../../assets/HomePhraseImg.jpg";

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
  font-size: 1.75rem;

  ${({ text }) => {
    if (text === "center") {
      return css`
        text-align: center;
        max-width: 550px;
        margin: 2rem auto 0 auto;

        &::after {
          content: "";
          display: block;
          height: 10rem;
          width: 2px;
          background-color: ${({ theme }) => theme.colors.secondary};
          margin: 2rem auto -8rem auto;
          border-radius: 10px;
        }
      `;
    } else {
      return css`
        max-width: 50%;
        text-align: start;
        margin: 2rem 0;
      `;
    }
  }};
`;

export const HomeBannerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 5rem 0;
  padding: 2rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};

  & > div {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
      url(${HomeBannerImg}) no-repeat;
    background-position: right;
    background-size: cover;
    width: 60%;
    height: 500px;
    border-radius: 5px;
  }

  & > div:last-child {
    background: none;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;

    text-align: center;
    padding: 1rem 2rem;
  }

  & h2 {
    font-size: 1.75rem;
  }

  & p {
    font-size: 1rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  & span {
    font-weight: 700;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }

  & div div {
    margin: 1rem auto 0 auto;
    width: 100%;
  }
`;

export const HomeDescs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin: 2rem 0 6rem 0;
`;

export const HomeDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ side }) => side};
  max-width: 395px;

  & img {
    justify-content: end;
    max-width: 75px;
    margin: 0 auto 1rem auto;
  }

  & h2 {
    margin-bottom: 1rem;
  }
`;

export const HomePhrase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${({theme}) => theme.colors.primary};
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};

  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${HomePhraseImg}) no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  height: 250px;
  color: #FFF;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 6rem;

  & span {
    color: ${({theme}) => theme.colors.primary};
  }
`;

export const HomeCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-top: 0.5rem;

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
