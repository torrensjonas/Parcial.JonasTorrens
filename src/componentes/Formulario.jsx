import React, { useState } from "react"
import Card from "./Card";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [error, setError] = useState(false);    
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setError(false);
        setShow(false);


        if (nombre.length < 3 || nombre[0] == " ") {
            setError(true);
        }
        if (genero.length < 6) {
            setError(true);
        }

        if (error == false) {
            setShow(true);
        }
    };

    const handleChangeNombre = (event) => {
        setError(false);
        setShow(false);
        setNombre(event.target.value);
    };

    const handleChangeGenero = (event) => {
        setError(false);
        setShow(false);
        setGenero(event.target.value);
    };

  return (
    <>
        <h2>Envíanos una canción</h2>
        <form onSubmit={handleSubmit}>
            <label> Nombre</label>
            <input value={nombre} onChange={handleChangeNombre} type="text" name="nombre" id="nombre" placeholder="Ingresa el nombre de la canción"/>
            <label> Género</label>
            <input value={genero} onChange={handleChangeGenero} type="text" name="genero" id="genero" placeholder="Ingresa el género de la canción"/>
            <button type="submit">Enviar</button>
        </form>
        {error && <span>Por favor chequea que la información sea correcta</span>}
        {(show && !error) && <Card key={1} nombre={nombre} genero={genero}/>}
    </>
  )
}

export default Formulario