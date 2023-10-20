import { Container } from "../../components/Container";
import { PlanosCard } from "../../components/PlanosCard";

import { EmpresasContainer, ListaPlanos, Planos } from "./styles";

export const Empresas = () => {
  const planos = [
    {
      size: "P",
      price: "81,00",
      list: ["Vantagem 1", "Vantagem 2"],
    },
    {
      size: "M",
      price: "162,00",
      list: ["Vantagem 1", "Vantagem 2", "Vantagem 3", "Vantagem 4", "Vantagem 5"],
    },
    {
      size: "G",
      price: "243,00",
      list: ["Vantagem 1", "Vantagem 2", "Vantagem 3"],
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
