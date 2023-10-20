import { ActionBtn } from "../ActionBtn";
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
          {plano.list.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </VantagensList>
      </div>

      <ActionBtn fill={"fill"} color={"primary"}>
        ASSINE AGORA
      </ActionBtn>
    </StyledPlanosCard>
  );
};
