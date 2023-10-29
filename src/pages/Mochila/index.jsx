import { useState } from "react";
import { Container } from "../../components/Container";
import { FormControl } from "../../components/FormControl";
import { PageTitle } from "../../components/PageTitle";

import { MochilaContainer, MochilaFilesList, MochilaForm, MochilaFormInputs } from "./styles";
import { ActionBtn } from "../../components/ActionBtn";

export const Mochila = () => {
  const [fileName, setFileName] = useState("");
  return (
    <MochilaContainer>
      <Container>
        <PageTitle>MOCHILA</PageTitle>

        <MochilaForm>
          <MochilaFormInputs>
            <FormControl
              id="fileName"
              label="Nome do arquivo"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              type="text"
              required={true}
            />
            <FormControl
              id="file"
              label="Escolher arquivo"
              type="file"
              required={true}
            />
          </MochilaFormInputs>

          <ActionBtn color={"secondary"} fill={"fill"}>SALVAR</ActionBtn>
        </MochilaForm>

        <MochilaFilesList>
          <p>Você não possue arquivos salvos...</p>
        </MochilaFilesList>
      </Container>
    </MochilaContainer>
  );
};
