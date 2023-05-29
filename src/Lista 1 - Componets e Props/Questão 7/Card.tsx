import { Currency } from "../../utils";
import { CardItems, CardProps } from "./Card.props";
import * as S from "./Card.styles";

export function Card({ items }: CardProps) {
  return (
    <div>
      <S.Card>
        {items.map((item: CardItems) => {
          return (
            <div key={item.id}>
              <p>{item.label}</p>
              <img src={item.image} height={40} />

              <p>{Currency(item.price)}</p>
            </div>
          );
        })}
      </S.Card>
    </div>
  );
}
