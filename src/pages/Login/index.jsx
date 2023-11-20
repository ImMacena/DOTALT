import { useCallback, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

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
  LoginButtons,
  ChooseUser,
  ChooseUserOpt,
} from "./styles";

import ImgLoginLight from "../../assets/LoginImgLight.png";
import ImgLoginDark from "../../assets/LoginImgDark.png";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const [imgLogin, setImgLogin] = useState(ImgLoginLight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [userType, setUserType] = useState("Student");
  const [userStudent, setUserStudent] = useState("true");
  const [userTeacher, setUserTeacher] = useState("");
  const [userInstitution, setUserInstitution] = useState("");

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUser = useCallback(
    (user) => {
      if (user === "Student") {
        setUserType("Student");
        setUserStudent("true");
        setUserTeacher("");
        setUserInstitution("");
      }

      if (user === "Teacher") {
        setUserType("Teacher");
        setUserStudent("");
        setUserTeacher("true");
        setUserInstitution("");
      }

      if (user === "Institution") {
        setUserType("Institution");
        setUserStudent("");
        setUserTeacher("");
        setUserInstitution("true");
      }
    },
    [setUserType, setUserStudent, setUserTeacher, setUserInstitution]
  );

  const handleSignin = useCallback(() => {
    const signin = async (email, password, userType) => {
      if (email && password) {
        try {
          const response = await auth.signin(email, password, userType);

          if (response) {
            return navigate("/Aluno");
          }
        } catch (error) {
          return toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 2000,
          });
        }
      }
    };

    signin(email, password, userType);
  }, [navigate, email, password, userType, auth]);

  const { title } = useContext(ThemeContext);

  useEffect(() => {
    title === "light" ? setImgLogin(ImgLoginLight) : setImgLogin(ImgLoginDark);
  }, [title]);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [setBtnDisabled, email, password]);

  return (
    <LoginContainer>
      <Container>
        <LoginContent>
          <LoginForm>
            <h1>Acesse sua conta na DOTALT</h1>
            
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
                <ChooseUserOpt
                  selected={userInstitution}
                  onClick={() => handleUser("Institution")}
                >
                  Instituição
                </ChooseUserOpt>
              </ul>
            </ChooseUser>

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

            <LoginButtons>
              <ActionBtn
                color="primary"
                disabled={btnDisabled}
                type="submit"
                action={handleSignin}
              >
                Entrar
              </ActionBtn>

              <p>Ou</p>

              <LoginGoogle>
                <div>
                  <FcGoogle size={20} />
                  <p>Fazer login com o Google</p>
                </div>
              </LoginGoogle>
            </LoginButtons>
          </LoginForm>

          <LoginImage>
            <img src={imgLogin} alt="Imagem da página de login" />
          </LoginImage>
        </LoginContent>
      </Container>
    </LoginContainer>
  );
};
