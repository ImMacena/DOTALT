import { useCallback, useState } from "react";
import { Container } from "../../components/Container";
import { PageTitle } from "../../components/PageTitle";

import { AtividadesContainer, AtividadesListContainer, AtividadesNav } from "./styles";

export const Atividades = () => {
  const [liToDo, setLiToDo] = useState("selected");
  const [liDo, setLiDo] = useState("");
  const [liNotDone, setLiNotDone] = useState("");

  const [viewAtividades, setViewAtividades] = useState("toDo");

  const handleToDo = useCallback((e) => {
    setLiToDo("selected");
    setLiDo("");
    setLiNotDone("");

    setViewAtividades("toDo");
  }, [])

  
  const handleDo = useCallback((e) => {
    setLiToDo("");
    setLiDo("selected");
    setLiNotDone("");

    setViewAtividades("do");
  }, [])

  
  const handleNotDone = useCallback((e) => {
    setLiToDo("");
    setLiDo("");
    setLiNotDone("selected");

    setViewAtividades("notDone");
  }, [])

  return (
    <AtividadesContainer>
      <Container>
        <PageTitle>ATIVIDADES</PageTitle>

        <AtividadesNav>
          <ul>
            <li className={liToDo} onClick={handleToDo}>PARA FAZER</li>
            <li className={liDo} onClick={handleDo}>FEITAS</li>
            <li className={liNotDone} onClick={handleNotDone}>NÃO ENTREGUES</li>
          </ul>
        </AtividadesNav>

        <AtividadesListContainer>
          <p>Nada para mostrar no momento...</p>
        </AtividadesListContainer>
      </Container>
    </AtividadesContainer>
  );
};
