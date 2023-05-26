import { PropsWithChildren } from "react";
import * as S from "./Header.styles";

export function Header({ children }: PropsWithChildren) {
  return (
    <S.Header>
      <S.Typography>{children}</S.Typography>
    </S.Header>
  );
}
