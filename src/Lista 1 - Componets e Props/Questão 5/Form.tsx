import React, { useState } from "react";
import * as S from "./Form.styles";

export function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChangeName(event) {
    setValues({ ...values, name: event.target.value });
  }

  function handleChangeEmail(event) {
    setValues({ ...values, email: event.target.value });
  }

  function handleChangeMessage(event) {
    setValues({ ...values, message: event.target.value });
  }

  return (
    <form>
      <S.Container>
        <div>
          <label>
            <S.Typography>Nome: </S.Typography>
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div>
          <label>
            <S.Typography>Email: </S.Typography>
            <input
              type="email"
              value={values.email}
              name="email"
              onChange={handleChangeEmail}
            />
          </label>
        </div>
        <div>
          <label>
            <S.Typography>Mensagem: </S.Typography>
            <input
              type="text"
              value={values.message}
              name="message"
              onChange={handleChangeMessage}
            />
          </label>
        </div>
      </S.Container>
    </form>
  );
}
