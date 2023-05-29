import { useState } from "react";
import * as S from "./Toggle.styles";

export function Toggle() {
  const [toggle, setToggle] = useState<boolean>(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div>
      <S.Toggle>
        <button onClick={handleClick}>
          <p>{toggle === true ? "Ligado" : "Desligado"}</p>
        </button>
      </S.Toggle>
    </div>
  );
}
