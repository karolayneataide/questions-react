import { CardProps } from "./Card.props";
import * as S from "./Card.styles";

export function Card({ title, children }: CardProps) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Container>
        <S.Typography>{children}</S.Typography>
      </S.Container>
    </S.Card>
  );
}
