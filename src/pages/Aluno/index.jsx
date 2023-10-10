import { useState } from "react";

import { Container } from "../../components/Container";
import { GreetingFrase } from "../../components/GreetingFrase";
import { ProfileCard } from "../../components/ProfileCard";
import { ActionCards } from "../../components/ActionCards";

import { AlunoContainer, AlunoQuickAccess, Pendentes, PendentesList } from "./styles";
import { PendentesCard } from "../../components/PendentesCard";

export const Aluno = () => {
  const [typeOfUser, setTypeOfUser] = useState("aluno");

  return (
    <AlunoContainer>
      <Container>
        <GreetingFrase typeOfUser={typeOfUser} institution="ETEC de Itanhaém" />

        <AlunoQuickAccess>
          <ProfileCard typeOfUser={typeOfUser} />

          <ActionCards typeOfUser={typeOfUser} />
        </AlunoQuickAccess>

        <Pendentes>
          <h2>ATIVIDADES PENDENTES</h2>

          <PendentesList>
            <PendentesCard
              turma={"3° DSI3"}
              materia={"Programação Web III"}
              dtPostagem={"10/10/2023"}
              dtPrazo={"20/10/2023"}
              atividade={"Estilizações com styled-components"}
            />

            <PendentesCard
              turma={"3° DSI3"}
              materia={"Programação Web III"}
              dtPostagem={"10/10/2023"}
              dtPrazo={"20/10/2023"}
              atividade={"Estilizações com styled-components"}
            />
          </PendentesList>
        </Pendentes>
      </Container>
    </AlunoContainer>
  );
};
