import React from "react";
import * as S from "./List.styles";

interface ListProps {
  children: React.ReactNode;
  props: string[];
}

export function List({ children, props }: ListProps) {
  return (
    <div>
      <S.Title>{children}</S.Title>
      <S.List>
        {props.map((prop) => (
          <p key={prop}>{prop}</p>
        ))}
      </S.List>
    </div>
  );
}
