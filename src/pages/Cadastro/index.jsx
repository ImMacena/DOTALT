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
  LoginButtons,
} from "./styles";
import { FormControl } from "../../components/FormControl";

import ImgCadastroLight from "../../assets/CadastroImgLight.png";
import ImgCadastroDark from "../../assets/CadastroImgDark.png";
import { useCallback } from "react";
import { useApi } from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ChooseUser, ChooseUserOpt } from "../Login/styles";

export const Cadastro = () => {
  const { title } = useContext(ThemeContext);
  const [imgCadastro, setImgCadastro] = useState(ImgCadastroLight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [username, setUsername] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [userType, setUserType] = useState("Student");
  const [userStudent, setUserStudent] = useState("true");
  const [userTeacher, setUserTeacher] = useState("");

  const navigate = useNavigate();

  const api = useApi();

  const handleUser = useCallback(
    (user) => {
      if (user === "Student") {
        setUserType("Student");
        setUserStudent("true");
        setUserTeacher("");
      }

      if (user === "Teacher") {
        setUserType("Teacher");
        setUserStudent("");
        setUserTeacher("true");
      }
    },
    [setUserType, setUserStudent, setUserTeacher]
  );

  const handleSignup = useCallback(() => {
    if (btnDisabled) {
      return;
    }

    if (password !== confirmPassword) {
      return toast.error("As senhas não coincidem.", {
        autoClose: 2000,
      });
    }

    const signup = async (username, email, password, userType, accessCode) => {
      if (username && email && password && userType && accessCode) {
        try {
          const response = await api.signup(
            username,
            email,
            password,
            userType,
            accessCode
          );

          if (response) {
            toast.success("Usuário cadastrado!", {
              autoClose: 2000,
            });
          }

          return navigate("/Login");
        } catch (error) {
          return toast.error(error.response.data.message, {
            autoClose: 2000,
          });
        }
      }
    };

    signup(username, email, password, userType, accessCode);
  }, [
    username,
    email,
    password,
    confirmPassword,
    userType,
    accessCode,
    api,
    btnDisabled,
    navigate,
  ]);

  useEffect(() => {
    title === "light"
      ? setImgCadastro(ImgCadastroLight)
      : setImgCadastro(ImgCadastroDark);
  }, [title]);

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      username.length > 0 &&
      accessCode.length > 0
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [setBtnDisabled, email, password, confirmPassword, username, accessCode]);

  return (
    <CadastroContainer>
      <Container>
        <CadastroContent>
          <CadastroForm>
            <h1>Cadastre uma conta na DOTALT</h1>

            <ChooseUser>
              <ul>
                <ChooseUserOpt
                  selected={userStudent}
                  onClick={() => handleUser("Student")}
                >
                  Aluno
                </ChooseUserOpt>
                <ChooseUserOpt
                  selected={userTeacher}
                  onClick={() => handleUser("Teacher")}
                >
                  Professor
                </ChooseUserOpt>
              </ul>
            </ChooseUser>

            <FormControl
              id="cadastroName"
              type="text"
              label="Nome Completo"
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />

            <FormControl
              id="cadastroEmail"
              type="email"
              label="E-mail válido"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <FormControl
              id="cadastroPassword"
              type="password"
              label="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />

            <FormControl
              id="cadastroConfirmPassword"
              type="password"
              label="Confirmar Senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />

            <FormControl
              id="accessCode"
              type="text"
              label="Código de acesso da turma"
              onChange={(e) => setAccessCode(e.target.value)}
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

            <LoginButtons>
              <ActionBtn
                color={"primary"}
                type="submit"
                disabled={btnDisabled}
                action={handleSignup}
              >
                Cadastrar
              </ActionBtn>

              <p>Ou</p>

              <CadastroGoogle>
                <div>
                  <FcGoogle size={20} />
                  <p>Fazer cadastro com o Google</p>
                </div>
              </CadastroGoogle>
            </LoginButtons>
          </CadastroForm>

          <CadastroImage>
            <img src={imgCadastro} alt="Imagem da página de login" />
          </CadastroImage>
        </CadastroContent>
      </Container>
    </CadastroContainer>
  );
};
