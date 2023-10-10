import { ActionBtn } from "../ActionBtn";
import { PendentesInfo, PendentesTitle, StyledPendentesCard } from "./styles";

export const PendentesCard = ({
  turma,
  materia,
  dtPostagem,
  dtPrazo,
  atividade,
  action,
}) => {
  return (
    <StyledPendentesCard onclick={action}>
      <PendentesInfo>
        <p>
          {materia} | <span>{turma}</span>
        </p>
        <p>
          Postagem: <span>{dtPostagem}</span> - Prazo: <span>{dtPrazo}</span>
        </p>
      </PendentesInfo>

      <PendentesTitle>
        <h2>{atividade}</h2>
        <ActionBtn onclick={action} color={"secondary"}>
          Visualizar
        </ActionBtn>
      </PendentesTitle>
    </StyledPendentesCard>
  );
};
