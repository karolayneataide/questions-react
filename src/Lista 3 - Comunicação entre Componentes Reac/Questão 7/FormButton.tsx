import { ChangeEvent, useState } from "react";

interface ClickProps {
  handleClick: () => void
}


export function FormButton() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, name: event.target.value });
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, email: event.target.value });
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, password: event.target.value });
  }

  function handleClick() {
      alert(`Nome: ${values.name}, Email: ${values.email} `);
  }
    
 


  return (
    <div>
      <div>
        <div>
          <label>Nome: </label>
          <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChangeName}
            />
            </div>
      <div>
        <label>Email: </label> 
         <input
              type="email"
              value={values.email}
              name="email"
              onChange={handleChangeEmail}
            />
      </div>
      <div>
        <label>Senha: </label> 
         <input
              type="password"
              value={values.password}
              name="senha"
              onChange={handleChangePassword}
            />
      </div>
      </div>
      <ButtonSubmit handleClick={handleClick}  />    
    </div>
  );
}

function ButtonSubmit({handleClick}:ClickProps) {
  return (
    <div>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
