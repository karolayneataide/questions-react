import { useState } from "react";

interface BrotherBProps {
  handleClick: () => void
}


export function BrotherA() {
  const [count, setCount] = useState<number>(0)
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <div>
         <BrotherB handleClick={handleClick} />       
      </div>
    </div>
  );
}


export function BrotherB({handleClick}: BrotherBProps){
  return(
    <div>
     <button onClick={handleClick}>Adicione 1</button> 
    </div>
  )
}