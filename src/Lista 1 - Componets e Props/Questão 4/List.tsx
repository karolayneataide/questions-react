import { ListProps } from "./List.props";
import * as S from "./List.styles";

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
