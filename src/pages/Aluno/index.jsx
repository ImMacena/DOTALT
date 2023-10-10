import { useState } from "react";

import { Container } from "../../components/Container";
import { GreetingFrase } from "../../components/GreetingFrase";
import { ProfileCard } from "../../components/ProfileCard";
import { ActionCards } from "../../components/ActionCards";

import { AlunoContainer, AlunoQuickAccess } from "./styles";

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
      </Container>
    </AlunoContainer>
  );
};
