import React from "react";
import { container, btn } from "./Form.module.css";

const Form = props => {
  const { name, lastname, age, carnet, submitHandler, changeHandler } = props;
  return (
    <form onSubmit={submitHandler} className={container}>
      <input
        id="name"
        onChange={changeHandler}
        value={name}
        placeholder="Ingrese nombre"
      />
      <input
        id="lastname"
        onChange={changeHandler}
        value={lastname}
        placeholder="Ingrese apellido"
      />
      <input
        id="age"
        onChange={changeHandler}
        value={age}
        placeholder="Ingrese edad"
      />
      <input
        id="carnet"
        onChange={changeHandler}
        value={carnet}
        placeholder="Ingrese carnet"
      />
      <button className={btn} type="submit">
        Guardar Usuario
      </button>
    </form>
  );
};

export default Form;
