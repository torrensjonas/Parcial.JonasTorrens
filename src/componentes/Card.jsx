import React from 'react'

const Card = (props) => {
    const {nombre, genero} = props;
    return (
        <>
            <hr />
            <h2>Información de la canción</h2>
            <div><strong>Nombre:</strong> {nombre}</div>
            <div><strong>Género:</strong> {genero}</div>
        </>
    )
}

export default Card