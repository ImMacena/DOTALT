import { useCallback, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { ThemeContext } from "styled-components";

import { FcGoogle } from "react-icons/fc";

import { Container } from "../../components/Container";
import { FormControl } from "../../components/FormControl";
import { ActionBtn } from "../../components/ActionBtn";

import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginImage,
  LoginActions,
  LoginGoogle,
} from "./styles";

import ImgLoginLight from "../../assets/LoginImgLight.png";
import ImgLoginDark from "../../assets/LoginImgDark.png";
// import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const [imgLogin, setImgLogin] = useState(ImgLoginLight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignin = useCallback(() => {
    const signin = async () => {
      if (email && password) {
        // const isLogged = await auth.signin(email, password);
        const isLogged = true;

        if (isLogged) {
          return navigate("/Aluno");
        }
      }
    };

    signin(email, password);
  }, [navigate, email, password]);

  const { title } = useContext(ThemeContext);

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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />

            <FormControl
              id="loginPassword"
              type="password"
              label="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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

            <ActionBtn color="primary" type="submit" action={handleSignin}>
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
