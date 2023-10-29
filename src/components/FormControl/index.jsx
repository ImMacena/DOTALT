import { StyledFormInput } from "./styles";

export const FormControl = ({
  id,
  type,
  label,
  required = false,
}) => {
  return (
    <StyledFormInput required={required}>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}

      <input
        type={type}
        id={id}
        required={required  ? true : false}
      />
    </StyledFormInput>
  );
};
