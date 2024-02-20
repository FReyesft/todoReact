import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  const initial = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
  const [todos, setTodos] = useState(initial);

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setTodos(newTodos);
  };

  return {
    todos,
    saveTodos,
  };
}

export { useLocalStorage };