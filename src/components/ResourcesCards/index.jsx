import { BsArrowRight } from "react-icons/bs";

import { StyledResourcesCards, StyledResourcesCard } from "./style";

export const ResourcesCards = () => {
  return (
    <StyledResourcesCards>
      <StyledResourcesCard>
        <div>
          <h2>Alunos</h2>
          <BsArrowRight size={45} />
        </div>
      </StyledResourcesCard>

      <StyledResourcesCard>
        <div>
          <h2>Professores</h2>
          <BsArrowRight size={45} />
        </div>
      </StyledResourcesCard>
    </StyledResourcesCards>
  );
};
