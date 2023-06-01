import { useState } from "react";
import * as S from "./Counter.styles";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <S.Counter>
        <button onClick={handleClick}>
          {count === 0 ? (
            <S.Card> Contador zerado</S.Card>
          ) : (
            <p>Você clicou {count}X</p>
          )}
        </button>
      </S.Counter>
    </div>
  );
}
