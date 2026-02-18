import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {addTodo, setOpenModal} =  React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const OnCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    const OnChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO: </label>
            <textarea placeholder="Hacer pan rustico Europeo" value={newTodoValue} onChange={OnChange}/>
            <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={OnCancel}>Cerrar</button>
            <button className="TodoForm-button TodoForm-button--add">añadir</button>
        </form>
    )
}

export {TodoForm};