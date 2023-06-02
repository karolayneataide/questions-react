import { useState } from "react";
import * as S from "./Modal.styles";

interface ModalProps {
  open: boolean;
}

export function Modal({ open }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <button onClick={handleChange}>Aperte aqui!</button>
      </div>
      {isOpen && (
        <S.Modal>
          <S.Typography>Tenha um bom dia XD</S.Typography>
        </S.Modal>
      )}
    </div>
  );
}
