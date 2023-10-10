import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 2rem 0;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  & li a {
    list-style: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }
`;

export const FooterCopy = styled.p`
  font-weight: bold;
  margin-top: 3rem;
  padding-top: 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
`;
