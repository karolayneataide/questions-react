import React from "react";
import * as S from "./Card.styles";

export function Card({ item, children }) {
  return (
    <S.Card>
      <S.Title>{item}</S.Title>
      <S.Container>
        <S.Typography>{children}</S.Typography>
      </S.Container>
    </S.Card>
  );
}
