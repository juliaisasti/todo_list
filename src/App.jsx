import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {

  // Datos ejemplo para recargar tareas
  const initialData = [{
    tarea: "Terminar ejercicio React",
    descripcion: "Hacer una aplicación para guardar tareas por hacer",
    fecha: "2023-11-28",
  },{
    tarea: "Terminar ejercicio POO",
    descripcion: "Hacer katas",
    fecha: "2023-12-01",
  }];

  // Para esconder botón con useState
  const [displayButton, setDisplayButton] = useState(false);

  // Para crear la lista de tareas
  const [data, setData] = useState({});
  const [list, setList] = useState([initialData]);

  // Pintar tareas
  const paintTodos = () => {
    // leer estado de array lista y devolver array componentes 
    return list.map((todo, i) => (
      <Todo
        key={uuidv4()}
        tarea={todo.tarea}
        descripcion={todo.descripcion}
        fecha={todo.fecha}
        deleteTodo={() => deleteTodo(i)}
      />
    ));
  };

  // Borrar tareas
  const clearTodos = () => {
    setList([]);
  };

  // Recargar ejemplos
  const resetTodo = () => {
    setList(initialData);
  };

  // Borrar una tarea específica
  const deleteTodo = (i) => {
    const remainingTodo = list.filter((todo, j) => i !== j);
    setList(remainingTodo);
  };

  // Pop-ups confirmación
  const handleSubmit = (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    const descripcion = e.target.descripcion.value;
    const fecha = e.target.fecha.value;

    const myTodo = { tarea, descripcion, fecha };

    const confirmated = confirm(`Desea crear el to do? Tarea: ${tarea}`);

    if (tarea.length > 30 || tarea.length < 6) {
      errors = [...errors, 'La tarea debe tener entre 6 y 30 caracteres'];
    };

    if (confirmated) {
      alert("To do creado");
      setData(myTodo); // {} deseo
      setList([...list, myTodo]); // [{},{},{},{}] lista de deseos
      e.target.tarea.value="";
      e.target.descripcion.value="";
      e.target.fecha.value="";
    }

    
  };

  // Función para mostrar botón
  const showButton = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };


  return (
    <>
      <h2>To Do List</h2>
      <button onClick={clearTodos}>Tareas completadas</button>
      <button onClick={resetTodo}>Recargar tareas ejemplo</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarea">Tarea</label>
        <br />
        <input type="text" name="tarea" onChange={showButton}/>
        <br />

        <label htmlFor="descripcion">Descripción</label>
        <br />
        <input type="text" name="descripcion" />
        <br />

        <label htmlFor="fecha">Fecha</label>
        <br />
        <input type="date" name="fecha" />
        <br />

        {displayButton && (
          <button className="addbutton" type="submit">
            Add
          </button>)}
      </form>
      <section>{paintTodos()}</section>
    </>
  );
}

export default App;
