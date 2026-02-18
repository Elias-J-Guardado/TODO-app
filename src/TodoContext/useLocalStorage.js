import React from "react";
// import { FaLinesLeaning } from "react-icons/fa6";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);



  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parcedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parcedItem = initialValue;
        } else {
          parcedItem = JSON.parse(localStorageItem);
        }
        setItem(parcedItem)

        setLoading(false);
      }
      catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 3000);
  },[itemName, initialValue]);



  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_LS_V1')

//  const defaultTodos = [
//    { texto: 'Programar en Godot', completed: false },
//    { texto: 'Hacer limpieza', completed: true },
//    { texto: 'Dibujar', completed: false },
//    { texto: 'Leer', completed: true },
//    { texto: 'ver series', completed: false },
//    { texto: 'Conseguir trabajo', completed: true },
//  ]

// localStorage.setItem('TODOS_LS_V1', JSON.stringify(defaultTodos));
