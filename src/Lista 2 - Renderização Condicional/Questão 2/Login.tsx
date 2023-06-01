import { ChangeEvent, useState } from "react";
import * as S from "./Login.styles";

export function Login() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, name: event.target.value });
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, password: event.target.value });
  }

  function handleClick() {
    return alert(`Boas vindas! ${values.name}`);
  }

  return (
    <form>
      <S.Container>
        <div>
          <label>
            <S.Typography>Name: </S.Typography>
            <input
              type="text"
              value={values.name}
              name="Nome"
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div>
          <label>
            <S.Typography>Senha: </S.Typography>
          </label>
          <input
            type="password"
            value={values.password}
            name="Senha"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button onClick={handleClick}>Entrar</button>
        </div>
      </S.Container>
    </form>
  );
}
