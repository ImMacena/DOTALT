import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "styled-components";

import { FcGoogle } from "react-icons/fc";

import { Container } from "../../components/Container";
import { ActionBtn } from "../../components/ActionBtn";
import {
  CadastroActions,
  CadastroContainer,
  CadastroContent,
  CadastroForm,
  CadastroGoogle,
  CadastroImage,
} from "./styles";
import { FormControl } from "../../components/FormControl";

import ImgCadastroLight from "../../assets/CadastroImgLight.png";
import ImgCadastroDark from "../../assets/CadastroImgDark.png";

export const Cadastro = () => {
  const { title } = useContext(ThemeContext);
  const [imgCadastro, setImgCadastro] = useState(ImgCadastroLight);

  useEffect(() => {
    title === "light"
      ? setImgCadastro(ImgCadastroLight)
      : setImgCadastro(ImgCadastroDark);
  }, [title]);

  return (
    <CadastroContainer>
      <Container>
        <CadastroContent>
          <CadastroForm>
            <h1>Cadatre uma conta na DOTALT</h1>

            <FormControl
              id="cadastroName"
              type="text"
              label="Nome Completo"
              required={true}
            />

            <FormControl
              id="cadastroEmail"
              type="email"
              label="E-mail válido"
              required={true}
            />

            <FormControl
              id="cadastroPassword"
              type="password"
              label="Senha"
              required={true}
            />

            <CadastroActions>
              <div>
                <input
                  type="checkbox"
                  name="PersistAuth"
                  id="persistConnectCheck"
                />

                <label htmlFor="persistConnectCheck">
                  Concordo com os
                  <a href="/"> Termos de Uso</a>.
                </label>
              </div>
            </CadastroActions>

            <ActionBtn color={"primary"} type="submit">
              Cadastrar
            </ActionBtn>

            <p>Ou</p>

            <CadastroGoogle>
              <div>
                <FcGoogle size={20} />
                <p>Fazer cadastro com o Google</p>
              </div>
            </CadastroGoogle>
          </CadastroForm>

          <CadastroImage>
            <img src={imgCadastro} alt="Imagem da página de login" />
          </CadastroImage>
        </CadastroContent>
      </Container>
    </CadastroContainer>
  );
};
