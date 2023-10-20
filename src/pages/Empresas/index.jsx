import { Container } from "../../components/Container";
import { PlanosCard } from "../../components/PlanosCard";

import { EmpresasContainer, ListaPlanos, Planos } from "./styles";

export const Empresas = () => {
  const planos = [
    {
      size: "P",
      price: "81,00",
      storage: "150GB",
      capacity: "300",
      list: [
        "Enviar e salvar materiais de aula.",
        "Atribuir e corrigir atividades.",
        "Acompanhar o desempenho dos alunos.",
        "Chat de interação entre professores e alunos.",
      ],
    },
    {
      size: "M",
      price: "162,00",
      storage: "300GB",
      capacity: "600",
      list: [
        "Enviar e salvar materiais de aula.",
        "Atribuir e corrigir atividades.",
        "Acompanhar o desempenho dos alunos.",
        "Chat de interação entre professores e alunos.",
      ],
    },
    {
      size: "G",
      price: "243,00",
      storage: "450GB",
      capacity: "900",
      list: [
        "Enviar e salvar materiais de aula.",
        "Atribuir e corrigir atividades.",
        "Acompanhar o desempenho dos alunos.",
        "Chat de interação entre professores e alunos.",
        "Prioridade no atendimento.",
        "Suporte personalizado."
      ],
    },
  ];

  return (
    <EmpresasContainer>
      <Container>
        <Planos>
          <h1>Selecione o plano que melhor se adapte!</h1>

          <ListaPlanos>
            {planos.map((plano, key) => {
              return <PlanosCard plano={plano} key={key} />;
            })}
          </ListaPlanos>
        </Planos>
      </Container>
    </EmpresasContainer>
  );
};
