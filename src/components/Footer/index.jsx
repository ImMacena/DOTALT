import { Container } from "../Container";

import { FooterCopy, FooterLinks, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterLinks>
          <li>
            <a href="/">Accesibilidade</a>
          </li>

          <li>
            <a href="/">Contato</a>
          </li>

          <li>
            <a href="/">Política de cookie</a>
          </li>

          <li>
            <a href="/">Política de privacidade</a>
          </li>

          <li>
            <a href="/">Termos de uso</a>
          </li>

          <li>
            <a href="/">Trabalhe conosco</a>
          </li>
        </FooterLinks>

        <FooterCopy>
          Copyright &copy; - TCC DOTALT - ETEC de Itanhaém - Itanhaém/SP
        </FooterCopy>
      </Container>
    </StyledFooter>
  );
};
