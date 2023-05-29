import { NavItems, NavProps } from "./Nav.props";
import * as S from "./Nav.styles";

export function Nav({ items }: NavProps) {
  return (
    <div>
      <S.Nav>
        {items.map((item: NavItems) => {
          return (
            <div key={item.id}>
              <a href={item.link} target="_blank">
                {item.label}
              </a>
            </div>
          );
        })}
      </S.Nav>
    </div>
  );
}
