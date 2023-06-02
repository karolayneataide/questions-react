import { ChangeEvent, useState } from "react";
import * as S from "./Authorization.styles";

const accessIDs = [551, 265, 352965, 3265, 54965];

export function Authorization() {
  const [access, setAccess] = useState<number | undefined>();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setAccess(parseInt(event.target.value));
  }

  function handleClick() {
    {
      accessIDs.includes(access || 0)
        ? alert("Acesso Permitido!")
        : alert("Acesso Negado!");
    }
  }

  return (
    <S.Card>
      <div>
        <S.Card>
          <label>
            <input
              placeholder="Digite o seu acesso"
              type="number"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Enviar</button>
          </label>
        </S.Card>
      </div>
    </S.Card>
  );
}
