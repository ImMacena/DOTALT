import { ActionBtn } from "../ActionBtn";

import { BsCheckLg } from "react-icons/bs";

import { StyledPlanosCard, VantagensList } from "./styles";

export const PlanosCard = ({ plano }) => {
  return (
    <StyledPlanosCard>
      <div>
        <h2>Plano {plano.size}</h2>
        <h3>
          R$ {plano.price} <span>/mês</span>
        </h3>

        <VantagensList>
          <li>
            <BsCheckLg />
            <p>Armazenamento de <span>{plano.storage}</span> (500MB para cada usuário salvar seus
            arquivos).</p>
          </li>

          <li>
            <BsCheckLg />
            <p><span>{plano.capacity}</span> códigos de acesso para usuários.</p>
          </li>

          {plano.list.map((item, key) => {
            return (
              <li key={key}>
                <BsCheckLg />
                <p>{item}</p>
              </li>
            );
          })}
        </VantagensList>
      </div>

      <ActionBtn fill={"fill"} color={"primary"}>
        ASSINE AGORA
      </ActionBtn>
    </StyledPlanosCard>
  );
};
