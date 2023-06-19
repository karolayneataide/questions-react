import { useState } from "react";
import * as S from "./Model.styles";


export function Model() {

  const [isOpen, setIsOpen] = useState<boolean>(true)

 function handleClickOpen(){
  setIsOpen(true)
 }

 function handleClickClose(){
  setIsOpen(false)
 }

 return (
  <div>
    <h3>Pencil digital</h3>
    {isOpen ? (<App onClose={handleClickClose} />) : (<p>Clique abaixo para saber o resultado do processo seletivo.</p>)}
    
   <button onClick={handleClickOpen} >Abrir</button>
  </div>
 );
}

function App({onClose}:{onClose:()=> void}) {

  return (
    <S.Container>
      <p>Você está aprovado!</p>
     <button onClick={onClose}>Fechar</button>
    </S.Container>
  );
}
