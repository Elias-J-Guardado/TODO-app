import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_LS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);


    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;



    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.texto.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );



    // console.log(`busco ${searchValue}`)

    const addTodo = (texto) => {
        const newTodos = [...todos];
        newTodos.push({
            texto: texto,
            completed: false,
        });
        saveTodos(newTodos);
    }

    const completeTodo = (texto) => {
        const newTodos = [...todos];

        const todoIndex = newTodos.findIndex(
            (todo) => todo.texto === texto
        );

        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (texto) => {
        const newTodos = [...todos];

        const todoIndex = newTodos.findIndex(
            (todo) => todo.texto === texto
        );

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo
            }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };