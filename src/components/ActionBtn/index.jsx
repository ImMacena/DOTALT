import { StyledButton } from "./styles";

export const ActionBtn = ({ children, action, fill, color }) => {
  return (
    <StyledButton onClick={action} fill={fill} color={color}>
      {children}
    </StyledButton>
  );
};
