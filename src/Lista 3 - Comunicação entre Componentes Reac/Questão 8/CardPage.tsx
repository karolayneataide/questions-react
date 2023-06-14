import { ContentItems, ContentProps, ContentsProps } from "./CardPage.props";
import * as S from "./CardPage.styles";


export function CardPage({contents}:ContentsProps) {
 return (
  <div>
    {contents.map((content:ContentItems) => (
    <Page key={content.id} content={content} />
    ))}
  </div>
 );
}

function Page({content}:ContentProps) {
  return (
    <S.Container>
      <div>
     {content.title}
      </div>
      <div>
     {content.text}
      </div>
    </S.Container>
  );
}
