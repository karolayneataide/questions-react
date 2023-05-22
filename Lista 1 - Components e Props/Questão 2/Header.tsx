import React from "react";
import * as S from "./Header.styles";

export function Header({ children }) {
  return (
    <S.Header>
      <S.Typography>{children}</S.Typography>
    </S.Header>
  );
}
