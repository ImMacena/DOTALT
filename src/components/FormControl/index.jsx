import { StyledFormInput } from "./styles";

export const FormControl = ({
  id,
  type,
  label,
  required = false,
  value,
  onChange,
}) => {
  return (
    <StyledFormInput required={required}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        required={required  ? true : false}
        value={value}
        onChange={onChange}
      />
    </StyledFormInput>
  );
};
