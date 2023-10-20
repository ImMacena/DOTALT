import { Container } from "../../components/Container";

import {
  HomeCards,
  HomeContent,
  HomeContentTitle,
  HomeDesc,
  HomeDescs,
  HomeHero,
  HomeTitle,
  Triangle,
} from "./styles";

import BarChartFill from "../../assets/BarChartFill.png";
import BookFill from "../../assets/BookFill.png";
import trianglePrimary from "../../assets/trianglePrimary.png";
import triangleSecondary from "../../assets/triangleSecondary.png";

import { PiBackpackLight } from "react-icons/pi";
import { BsClipboard, BsFileEarmarkPlus, BsPeople } from "react-icons/bs";

import { HomeCard } from "../../components/HomeCard";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ResourcesCards } from "../../components/ResourcesCards";

export const Home = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <HomeHero>
        <Container>
          <HomeTitle>
            <h1>DOTALT</h1>
            <h2>Docência Tecnológica Alternativa</h2>
            <p>Mude o mundo através da educação</p>
          </HomeTitle>
        </Container>
      </HomeHero>

      <HomeContent>
        <Container>
          <HomeContentTitle text={"center"}>
            Combine suas aulas com tecnologia e alavanque o conhecimento!
          </HomeContentTitle>

          <HomeDescs>
            <HomeDesc side={"center"} >
              <img src={BarChartFill} alt="Imagem de gráfico de barras" />
              <h2>Acompanhe o desempenho acadêmico</h2>
              <p>
                Diversas ferramentas para o acompanhamento de entregas de
                atividades.
              </p>
            </HomeDesc>
            <HomeDesc side={"center"} >
              <img src={BookFill} alt="Imagem de livro" />
              <h2>Mais praticidade e disponibilidade</h2>
              <p>
                Acesse conteúdos e materiais complementares a qualquer hora na
                DOTALT.
              </p>
            </HomeDesc>
          </HomeDescs>

          <HomeCards>
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
              Tenha o controle de quais atividades foram concluídas.
            </HomeCard>

            <HomeCard
              title={"Expanda seu conhecimento"}
              icon={<BsFileEarmarkPlus color={colors.primary} size={65} />}
            >
              Acesse conteúdos complementares nos assuntos que gosta.
            </HomeCard>

            <HomeCard
              title={"Controle cada matéria"}
              icon={<BsPeople color={colors.primary} size={65} />}
            >
              Veja anúncios e mensagens dos seus professores.
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
