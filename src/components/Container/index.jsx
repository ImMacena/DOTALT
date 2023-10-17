import { StyledContainer } from "./styles";

export const Container = ({ children, pleft }) => {
  return <StyledContainer pleft={pleft}>{children}</StyledContainer>;
};
