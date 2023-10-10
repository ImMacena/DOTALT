import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "styled-components";

import { FcGoogle } from "react-icons/fc";

import { Container } from "../../components/Container";
import { FormControl } from "../../components/FormControl";
import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginImage,
  LoginActions,
  LoginGoogle,
} from "./styles";
import { ActionBtn } from "../../components/ActionBtn";

import ImgLoginLight from "../../assets/LoginImgLight.png";
import ImgLoginDark from "../../assets/LoginImgDark.png";

export const Login = () => {
  const { title } = useContext(ThemeContext);
  const [imgLogin, setImgLogin] = useState(ImgLoginLight);

  useEffect(() => {
    title === "light" ? setImgLogin(ImgLoginLight) : setImgLogin(ImgLoginDark);
  }, [title]);

  return (
    <LoginContainer>
      <Container>
        <LoginContent>
          <LoginForm>
            <h1>Acesse sua conta na DOTALT</h1>

            <FormControl
              id="loginEmail"
              type="email"
              label="E-mail"
              required={true}
            />

            <FormControl
              id="loginPassword"
              type="password"
              label="Senha"
              required={true}
            />

            <LoginActions>
              <div>
                <input
                  type="checkbox"
                  name="PersistAuth"
                  id="persistConnectCheck"
                />

                <label htmlFor="persistConnectCheck">
                  Mantenha-me conectado.
                </label>
              </div>

              <a href="/">Esqueci minha senha</a>
            </LoginActions>

            <ActionBtn color={"primary"} type="submit">
              Entrar
            </ActionBtn>

            <p>Ou</p>

            <LoginGoogle>
              <div>
                <FcGoogle size={20} />
                <p>Fazer login com o Google</p>
              </div>
            </LoginGoogle>
          </LoginForm>

          <LoginImage>
            <img src={imgLogin} alt="Imagem da página de login" />
          </LoginImage>
        </LoginContent>
      </Container>
    </LoginContainer>
  );
};
