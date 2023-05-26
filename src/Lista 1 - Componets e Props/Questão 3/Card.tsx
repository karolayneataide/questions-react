import React from "react";
import * as S from "./Card.styles";

export function Card({ title, children }) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Container>
        <S.Typography>{children}</S.Typography>
      </S.Container>
    </S.Card>
  );
}
