import { useEffect, useMemo, useState } from "react";

import { Container } from "../Container";
import { StyledGreeting } from "./styles";

export const GreetingFrase = ({ typeOfUser, institution }) => {
  const [greeting, setGreeting] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();

  const dataAtual = new Date();
  const horaAtual = dataAtual.getHours();
  const diaSemanaAtual = dataAtual.getDay();

  useMemo(() => {
    switch (diaSemanaAtual) {
      case 0:
        setDayOfWeek("domingo");
        break;
      case 1:
        setDayOfWeek("segunda-feira");
        break;
      case 2:
        setDayOfWeek("terça-feira");
        break;
      case 3:
        setDayOfWeek("quarta-feira");
        break;
      case 4:
        setDayOfWeek("quinta-feira");
        break;
      case 5:
        setDayOfWeek("sexta-feira");
        break;
      case 6:
        setDayOfWeek("sábado");
        break;
      default:
        setDayOfWeek("...");
        break;
    }
  }, [diaSemanaAtual]);

  useEffect(() => {
    let greetingMessage = "";

    if (horaAtual >= 24 && horaAtual < 12) {
      greetingMessage = "Bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      greetingMessage = "Boa tarde";
    } else if (horaAtual >= 18 && horaAtual < 24) {
      greetingMessage = "Boa noite";
    } else {
      greetingMessage = "Olá";
    }

    setGreeting(greetingMessage);
  }, [horaAtual]);

  return (
    <Container>
      <StyledGreeting>
        <h2>
          {greeting} {typeOfUser}! <span>Hoje é {dayOfWeek}.</span>
        </h2>
        <h2>
          Instituição: {institution}
        </h2>
      </StyledGreeting>
    </Container>
  );
};
