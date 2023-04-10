import React from "react";
import { useState } from "react";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hNombre = (e) => {
    setErrorMessage("");
    setNombre(e.target.value)};

  const hEmail = (e) => {
    setErrorMessage("");
      setEmail(e.target.value)
  };

function validarDatos(nombre, email){
    if(nombre === "" || email === ""){
        setErrorMessage("El campo Nombre y Email son obligatorios");
        return
    }
    const nombreerrorMessage = nombre.replace(/^\s+|\s+$/gm,'');
    if(nombreerrorMessage.length < 5){
      setErrorMessage("El nombre debe tener 5 ó más carácteres.");
      return
    }
    return
}

function handleDatos(e){
    e.preventDefault();
    validarDatos(nombre, email);
}

  return (
    <div className="flex">
      <form onSubmit={handleDatos} >  
        <div className="form">
          <div className="input">
              <label htmlFor="nombre">Nombre  </label>  
              <input type="text" id="nombre" value={nombre} onChange={hNombre} />
          </div>
          <div className="input">
              <label htmlFor="email">Email  </label>
              <input type="email" id="email" value={email} onChange={hEmail}/>
          </div>
          <div className="button">
              <button type="submit">Enviar</button>
          </div>
          <div className="alert">
              {errorMessage ? <p>{errorMessage}</p> : null}
              
          </div>
        </div>
      </form>  
    </div>
  );
};

export default Form;