
interface MessageProps {
  message: string;
}


export function GranpaDadSon({ message }:MessageProps) {
  return (
    <div>
      <div>
         <Dad message={message} />      
         <Uncle message={message} />    
      </div>
    </div>
  );
}


export function Dad({message}:MessageProps){
 return(
  <div>
    <p>{message}</p>
  </div>
 )
}

export function Uncle({message}:MessageProps){
  return(
   <div>
     <p>{message}</p>
   </div>
  )
 }