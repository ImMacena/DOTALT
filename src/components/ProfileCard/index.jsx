import { BsPersonCircle } from 'react-icons/bs';

import { ProfileDesc, ProfileIcon, StyledProfileCard } from "./styles";
import { ActionBtn } from '../ActionBtn';

export const ProfileCard = ({ typeOfUser, username }) => {
  return (
    <StyledProfileCard>
      <ProfileIcon>
        <BsPersonCircle size={125} />
      </ProfileIcon>

      <ProfileDesc>
        <h2>Marina Silva Souza</h2>
        <ActionBtn color={"secondary"} >
          Visualizar Perfil
        </ActionBtn>
      </ProfileDesc>
    </StyledProfileCard>
  );
};
