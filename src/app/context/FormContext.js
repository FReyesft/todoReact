import { createContext } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [inputValue, setInputValue] = useState('')
	const [todos, setTodos] = useState([]);
	const openForm = () => setIsFormVisible(true);
	const closeForm = () => setIsFormVisible(false);
	const saveTodosIntoLocalStorage = (todos) => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	useEffect(() => {
		loadTodosFromLocalStorage();
	}, [setTodos]);
	const loadTodosFromLocalStorage = () => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			setTodos(todos);
		}
	}

	const addTodo = (text) => {
		const newTodos = [...todos, { text, id: Date.now() }];
		saveTodosIntoLocalStorage(newTodos);
		loadTodosFromLocalStorage();
	};

	const completeTodo = (id) => {
		const newTodos = [...todos];
		const findIndex = newTodos.findIndex(t => t.id === id);
		newTodos[findIndex].status = !newTodos[findIndex].status;
		saveTodosIntoLocalStorage(newTodos);
		loadTodosFromLocalStorage();
	}

	const deleteTodo = (id) => {
		const newTodos = todos.filter(t => t.id !== id);
		saveTodosIntoLocalStorage(newTodos);
		loadTodosFromLocalStorage();
	}

	return (
		<FormContext.Provider value={{ isFormVisible, openForm, closeForm, inputValue, setInputValue, addTodo, todos, completeTodo, deleteTodo, loadTodosFromLocalStorage}}>
			{children}
		</FormContext.Provider>
	);
}