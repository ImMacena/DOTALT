import { StyledButton } from "./styles";

export const ActionBtn = ({
  children,
  action,
  fill,
  color,
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={action}
      fill={fill}
      color={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
