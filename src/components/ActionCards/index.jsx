import { BsBook } from "react-icons/bs";
import { PiBackpackLight } from "react-icons/pi";

import { ActionCard, StyledActionCards } from "./styles";

export const ActionCards = ({ typeOfUser }) => {
  return (
    <StyledActionCards>
      {typeOfUser === "aluno" && (
        <>
          <ActionCard onClick={() => console.log("click")}>
            <div>
              <h2>Conteúdos Escolares</h2>
              <p>Livros . Slides . Documentos</p>
            </div>
            <BsBook size={40} />
          </ActionCard>

          <ActionCard onClick={() => console.log("click")}>
            <div>
              <h2>Minha Mochila</h2>
              <p>Salvar Arquivos . Baixar Arquivos</p>
            </div>
            <PiBackpackLight size={45} />
          </ActionCard>
        </>
      )}
    </StyledActionCards>
  );
};
