import { StyledPageTitle } from "./styles";

export const PageTitle = ({ children }) => {
  return (
    <StyledPageTitle>
      <h1>{children}</h1>
    </StyledPageTitle>
  );
};
