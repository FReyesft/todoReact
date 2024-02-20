import { useState, useEffect } from "react";
function useLocalStorage(itemName, initialValue) {
  const [todos, setTodos] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setTodos(newTodos);
  };
  //* get from local storage async and set loading state
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      const initial = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
      setLoading(false);
      setTodos(initial);
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    loading,
    todos,
    saveTodos,
  };
}

export { useLocalStorage };