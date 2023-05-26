import React from "react";
import * as S from "./List.styles";

interface ListProps {
  title: React.ReactNode;
  items: string[];
}

export function List({ title, items }: ListProps) {
  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.List>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </S.List>
    </div>
  );
}
