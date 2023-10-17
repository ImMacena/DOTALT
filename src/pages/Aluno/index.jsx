import { Container } from "../../components/Container";
import { GreetingFrase } from "../../components/GreetingFrase";
import { ProfileCard } from "../../components/ProfileCard";
import { ActionCards } from "../../components/ActionCards";
import { PendentesCard } from "../../components/PendentesCard";

import {
  AlunoContainer,
  AlunoQuickAccess,
  Pendentes,
  PendentesList,
} from "./styles";

export const Aluno = () => {

  // Informação que virá da API
  const AtividadesPendentes = [
    {
      turma: "3° DSI",
      materia: "Programação Web III",
      dtPostagem: "10/10/2023",
      dtPrazo: "15/10/2023",
      atividade: "Estilizações com styled-components",
    },
    {
      turma: "3° DSI",
      materia: "Banco de Dados III",
      dtPostagem: "26/09/2023",
      dtPrazo: "12/10/2023",
      atividade: "Resumo sobre abstração de dados",
    },
  ];

  const userData = {
    nome: "Marina Silva Souza",
    userType: "aluno",
    instituicao: "ETEC de Itanhaém",
    turma: "3 DSI",
  };

  return (
    <AlunoContainer>
      <Container pleft={"true"}>
        <GreetingFrase typeOfUser={userData.userType} institution={userData.instituicao} />

        <AlunoQuickAccess>
          <ProfileCard typeOfUser={userData.userType} />

          <ActionCards typeOfUser={userData.userType} />
        </AlunoQuickAccess>

        <Pendentes>
          <h2>ATIVIDADES PENDENTES</h2>

          <PendentesList>
            {AtividadesPendentes.map((data, key) => {
              return (
                <PendentesCard
                  turma={data.turma}
                  materia={data.materia}
                  dtPostagem={data.dtPostagem}
                  dtPrazo={data.dtPrazo}
                  atividade={data.atividade}
                  key={key}
                />
              );
            })}
          </PendentesList>
        </Pendentes>
      </Container>
    </AlunoContainer>
  );
};
