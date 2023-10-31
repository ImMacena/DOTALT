import { Container } from "../../components/Container";
import { ResourcesCards } from "../../components/ResourcesCards";
import { HomeCard } from "../../components/HomeCard";
import { ActionBtn } from "../../components/ActionBtn";

import scrollReveal from "scrollreveal";

import {
  HomeBannerTitle,
  HomeCards,
  HomeContent,
  HomeContentTitle,
  HomeDesc,
  HomeDescs,
  HomeHero,
  HomePhrase,
  HomeTitle,
  Triangle,
} from "./styles";

import BarChartFill from "../../assets/BarChartFill.png";
import BookFill from "../../assets/BookFill.png";
import trianglePrimary from "../../assets/trianglePrimary.png";
import triangleSecondary from "../../assets/triangleSecondary.png";

import { PiBackpackLight } from "react-icons/pi";
import { BsClipboard, BsFileEarmarkPlus, BsPeople } from "react-icons/bs";

import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "styled-components";

export const Home = () => {
  const { colors } = useContext(ThemeContext);

  const homeTitle = useRef();
  const homeDescs = useRef();
  const bannerP1 = useRef();
  const bannerP2 = useRef();
  const homePhrase = useRef();
  const homeSubtitle = useRef();
  const homeCards = useRef();

  useEffect(() => {
    const config = {
      reset: true,
      delay: 200,
      distance: "60px",
    };

    const configLeft = {
      ...config,
      origin: "left",
    };

    const configBottom = {
      ...config,
      origin: "bottom",
    };

    const configRight = {
      ...config,
      origin: "right",
    };

    if (homeTitle.current) {
      scrollReveal().reveal(homeTitle.current, configLeft);
    }

    if (homeDescs.current) {
      scrollReveal().reveal(homeDescs.current, configBottom);
    }

    if (bannerP1.current) {
      scrollReveal().reveal(bannerP1.current, configBottom);
    }

    if (bannerP2.current) {
      scrollReveal().reveal(bannerP2.current, configBottom);
    }

    if (homePhrase.current) {
      scrollReveal().reveal(homePhrase.current, configLeft);
    }

    if (homeSubtitle.current) {
      scrollReveal().reveal(homeSubtitle.current, configRight);
    }

    if (homeCards.current) {
      scrollReveal().reveal(homeCards.current, configBottom);
    }
  }, []);

  return (
    <>
      <HomeHero>
        <Container>
          <HomeTitle ref={homeTitle}>
            <h1>DOTALT</h1>
            <h2>Docência Tecnológica Alternativa</h2>
            <p>Mude o mundo através da educação</p>
          </HomeTitle>
        </Container>
      </HomeHero>

      <HomeContent>
        <Container>
          <HomeContentTitle text={"center"}>
            Combine suas aulas presenciais com tecnologia e alavanque o
            conhecimento!
          </HomeContentTitle>

          <HomeDescs ref={homeDescs}>
            <HomeDesc side={"center"}>
              <img src={BarChartFill} alt="Imagem de gráfico de barras" />
              <h2>Acompanhe o desempenho acadêmico</h2>
              <p>
                Diversas ferramentas para o acompanhamento de entregas de
                atividades.
              </p>
            </HomeDesc>

            <HomeDesc side={"center"}>
              <img src={BookFill} alt="Imagem de livro" />
              <h2>Mais praticidade e disponibilidade</h2>
              <p>
                Acesse conteúdos e materiais complementares a qualquer hora na
                DOTALT.
              </p>
            </HomeDesc>
          </HomeDescs>

          <HomeBannerTitle>
            <div></div>
            <div>
              <h2>
                Convide sua instituição para adotar a plataforma no sistema de
                ensino!
              </h2>
              <p ref={bannerP1}>
                As aulas presenciais são mais interessantes com um sistema
                digital que oferece praticidade.
              </p>
              <p ref={bannerP2}>
                Com a nossa plataforma, concilie suas aulas
                <span> presenciais</span> com as vantagens de um sistema{" "}
                <span>online</span>.
              </p>

              <ActionBtn fill={"fill"} color={"secondary"}>
                Quero participar!
              </ActionBtn>
            </div>
          </HomeBannerTitle>
        </Container>

        <HomePhrase>
          <Container>
            <h2 ref={homePhrase}>Seja do tamanho dos seus sonhos.</h2>
            <p ref={homeSubtitle}>
              <span>#</span>DOTALT
            </p>
          </Container>
        </HomePhrase>

        <Container>
          <HomeContentTitle text={"start"}>
            Alguns dos recursos
          </HomeContentTitle>
          <HomeCards ref={homeCards}>
            <HomeCard
              title={"Salve seus materiais"}
              icon={<PiBackpackLight color={colors.primary} size={75} />}
            >
              Poupe-se de carregar cadernos e livros. Tudo estará aqui!
            </HomeCard>

            <HomeCard
              title={"Atribua e faça atividades"}
              icon={<BsClipboard color={colors.primary} size={65} />}
            >
              Tenha o controle de quais e quantas atividades foram feitas ou
              estão pendentes.
            </HomeCard>

            <HomeCard
              title={"Expanda seu conhecimento"}
              icon={<BsFileEarmarkPlus color={colors.primary} size={65} />}
            >
              Acesse conteúdos complementares e se aprofunde no que gosta.
            </HomeCard>

            <HomeCard
              title={"Controle cada matéria"}
              icon={<BsPeople color={colors.primary} size={65} />}
            >
              Veja avisos dos seus professores, e acesse o chat em tempo real.
            </HomeCard>
          </HomeCards>

          <HomeContentTitle>Todos os recursos</HomeContentTitle>

          <ResourcesCards />

          <Triangle src={trianglePrimary} alt="trangulo verde" />
          <Triangle src={triangleSecondary} alt="trangulo azul" />
        </Container>
      </HomeContent>
    </>
  );
};
