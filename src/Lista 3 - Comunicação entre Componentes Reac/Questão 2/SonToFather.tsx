import { FormEvent, useState } from "react";
import { FatherSon } from "../Questão 1/FatherSon";
import { TextItems } from "../Questão 1/FatherSon.props";

export function SonToFather() {
  const [text, setText] = useState<TextItems>();

  const [texts, setTexts] = useState<TextItems[]>([]);

  function onSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault();

    if (text) {
      setTexts([text]);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={text?.name}
          onChange={(event) =>
            setText({
              id: Math.random().toString(36),
              name: event.target.value,
            })
          }
        />
        <button>Atualizar mensagem</button>
      </form>
      <FatherSon texts={texts} />
    </div>
  );
}
