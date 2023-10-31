import { StyledHomeCard } from "./style";

export const HomeCard = ({ title, icon, children }) => {
  return (
    <StyledHomeCard>
      <h3>{title}</h3>
      {icon}
      <p>{children}</p>
    </StyledHomeCard>
  );
};
