import { TextItems, TextProps, TextsProps } from "./FatherSon.props";

export function FatherSon({ texts }: TextsProps) {
  return (
    <div>
      <div>
        <p>Mensagem</p>
      </div>
      <div>
        {texts && texts.length > 0 ? (
          texts.map((text: TextItems) => <Son key={text.id} text={text} />)
        ) : (
          <p>Não há mensagens!</p>
        )}
      </div>
    </div>
  );
}

function Son({ text }: TextProps) {
  return (
    <div>
      <div>{text.name}</div>
    </div>
  );
}
