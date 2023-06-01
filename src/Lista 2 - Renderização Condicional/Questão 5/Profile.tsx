import { useState } from "react";
import { UserItems, UserProps, UsersProps } from "./Profile.props";
import * as S from "./Profile.styles";

export function Profile({ users }: UsersProps) {
  return (
    <S.Container>
      {users.map((user: UserItems) => (
        <User key={user.name} user={user} />
      ))}
    </S.Container>
  );
}

function User({ user }: UserProps) {
  const [adm, setAdm] = useState(user.isAdmin);

  function handleClick() {
    setAdm(!adm);
  }

  return (
    <S.Container>
      <div>
        <S.Title>Name: </S.Title>
        <S.Typography>{user.name}</S.Typography>
      </div>
      <div>
        <S.Title>Idade: </S.Title>
        <S.Typography>{user.age}</S.Typography>
      </div>
      <div>
        <label>
          <S.Title>É administrador: </S.Title>
          <button onClick={handleClick}>{adm === true ? "Sim" : "Não"}</button>
        </label>
      </div>
      <div> {adm === false ? "Acesso Negado" : "Acesso Permitido"}</div>
    </S.Container>
  );
}
