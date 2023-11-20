import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import ApexCharts from "react-apexcharts";

import { ActionBtn } from "../../components/ActionBtn";
import { Container } from "../../components/Container";
import { GreetingFrase } from "../../components/GreetingFrase";
import { ActionCards } from "../../components/ActionCards";
import { PendentesCard } from "../../components/PendentesCard";

import {
  AlunoContainer,
  AlunoQuickAccess,
  AtivEntregues,
  AtivNaoEntregues,
  AtivPendentes,
  Desempenho,
  DesempenhoArmazenamento,
  DesempenhoResumo,
  Pendentes,
  PendentesList,
  ProfileDesc,
  ProfileIcon,
  StyledProfileCard,
  Title,
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

  const opt = {
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
    },
    labels: ["Disponível", "Usado"],
    colors: ["#25FF92", "#FC3565"],
  };

  const series = [300, 200];

  const [userDesc, setUserDesc] = useState("");

  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user?.userType === "Student") setUserDesc("Aluno");
    if (auth.user?.userType === "Teacher") setUserDesc("Professor");
    if (auth.user?.userType === "Institution") setUserDesc("Administrador");
  }, [auth]);

  return (
    <AlunoContainer>
      <Container>
        <GreetingFrase
          typeOfUser={userData.userType}
          institution={userData.instituicao}
        />

        <AlunoQuickAccess>
          <StyledProfileCard>
            <ProfileIcon>
            </ProfileIcon>

            <ProfileDesc>
              <h2>{auth.user?.name}</h2>
              <p>{userDesc}</p>
              <ActionBtn color={"secondary"}>Visualizar Perfil</ActionBtn>
            </ProfileDesc>
          </StyledProfileCard>

          <ActionCards typeOfUser={userData.userType} />
        </AlunoQuickAccess>

        <Desempenho>
          <DesempenhoResumo>
            <Title>SEU DESEMPENHO</Title>

            <div>
              <AtivEntregues>
                <h2>4</h2>
                <p>ENTREGUES</p>
              </AtivEntregues>

              <AtivPendentes>
                <h2>6</h2>
                <p>PENDENTES</p>
              </AtivPendentes>

              <AtivNaoEntregues>
                <h2>2</h2>
                <p>NÃO ENTREGUES</p>
              </AtivNaoEntregues>
            </div>
          </DesempenhoResumo>

          <DesempenhoArmazenamento>
            <Title>Armazenamento Mochila</Title>

            <div>
              <ApexCharts
                options={opt}
                series={series}
                type="pie"
                width={350}
              />
            </div>
          </DesempenhoArmazenamento>
        </Desempenho>

        <Pendentes>
          <Title>ATIVIDADES PENDENTES</Title>

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
