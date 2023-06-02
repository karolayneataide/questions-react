import { useEffect, useState } from "react";
import * as S from "./Timer.styles";

export function Timer() {
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    if (seconds && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <S.Card>
      <input
        placeholder="Digite os segundos"
        type="number"
        onChange={(event) => setSeconds(parseInt(event.target.value))}
      />
      {typeof seconds === "number" &&
        (seconds === 0 ? (
          <p>Tempo esgotado!</p>
        ) : (
          <p>Tempo restante: {seconds} segundos</p>
        ))}
    </S.Card>
  );
}
