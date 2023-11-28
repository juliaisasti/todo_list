// rfce

import React from 'react'

function Todo({tarea, descripcion, fecha, deleteTodo}) {
  return (
    <article>
          <h3>{tarea}</h3>
          <p>Descripción: {descripcion}</p>
          <p>Fecha: {fecha}</p>
          <br />
          <button onClick={deleteTodo}>Borrar</button>
        </article>
  )
}

export default Todo