import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {

  // let parsetTodos = JSON.parse(localStorageTodos);
 

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;


