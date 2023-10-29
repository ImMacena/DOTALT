import { LuSendHorizonal } from "react-icons/lu";

import { Container } from "../../components/Container";
import { PageTitle } from "../../components/PageTitle";

import {
  TurmasContainer,
  TurmaInfoContainer,
  TurmasChatContainer,
  TurmasContentContainer,
  TurmasList,
  Turma,
  TurmasChat,
  ChatMessageArea,
} from "./styels";

export const Turmas = () => {
  return (
    <TurmasContainer>
      <Container>
        <PageTitle>TURMAS</PageTitle>

        <TurmasContentContainer>
          <TurmasList>
            <Turma>Banco de Dados III</Turma>
            <Turma>Internet e Protocolos</Turma>
            <Turma>Programação Web III</Turma>
            <Turma>Desenvolvimento de TCC</Turma>
          </TurmasList>

          <TurmasChatContainer>
            <h3>CHAT DA MATÉRIA</h3>

            <TurmasChat></TurmasChat>

            <ChatMessageArea>
              <textarea id="TurmasChatMessage" rows="1" />
              <div>
                <LuSendHorizonal size={25} />
              </div>
            </ChatMessageArea>
          </TurmasChatContainer>
        </TurmasContentContainer>
        <TurmaInfoContainer></TurmaInfoContainer>
      </Container>
    </TurmasContainer>
  );
};
