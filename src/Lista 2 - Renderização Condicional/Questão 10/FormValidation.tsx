import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import * as S from "./FormValidation.styles";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Digite a sua senha")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  name: Yup.string()
    .required("Digite seu nome")
    .min(4, "O nome deve ter no mínino 4 caracteres"),
  email: Yup.string().required("Digite seu email"),
});

export function FormValidation() {
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
    validationSchema
      .validate(values)
      .then(function () {
        alert("Acesso Permitido!");
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <form>
      <S.Container>
        <div>
          <label>
            <S.Typography>Name: </S.Typography>
            <input
              type="text"
              value={values.name}
              name="Nome"
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
              name="Email"
              onChange={handleChangeEmail}
            />
          </label>
        </div>
        <div>
          <label>
            <S.Typography>Senha: </S.Typography>
          </label>
          <input
            type="password"
            value={values.password}
            name="Senha"
            onChange={handleChangePassword}
          />
        </div>
        <S.Card>
          <S.Button type="button" onClick={handleClick}>
            Entrar
          </S.Button>
        </S.Card>
      </S.Container>
    </form>
  );
}
