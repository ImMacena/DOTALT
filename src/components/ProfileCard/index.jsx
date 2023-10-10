import { BsPersonCircle } from 'react-icons/bs';

import { ProfileDesc, ProfileIcon, StyledProfileCard } from "./styles";

export const ProfileCard = ({ typeOfUser, username }) => {
  return (
    <StyledProfileCard>
      <ProfileIcon>
        <BsPersonCircle size={125} />
      </ProfileIcon>

      <ProfileDesc>
        <h2>Marina Silva Souza</h2>

        <button>Visualizar Perfil</button>
      </ProfileDesc>
    </StyledProfileCard>
  );
};
