import { StyledHomeCard } from "./style";

export const HomeCard = ({ title, icon, children }) => {
  return (
    <StyledHomeCard>
      <h2>{title}</h2>
      {icon}
      <p>{children}</p>
    </StyledHomeCard>
  );
};
