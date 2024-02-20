import { ActionBar } from './components/actionBar/ActionBar';
import './App.css';
import { TodoCounter } from './components/todoCounter/TodoCounter';
import { TodoItem } from './components/todoItem/TodoItem';
import { TodoList } from './components/todoList/TodoList';
import { useState } from 'react';
import jsConfetti from 'js-confetti';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const confetti = new jsConfetti(); 

function App() {
  const defaulTodos = [
    { text: 'Cortar cebolla', status: false, id: 1 },
  ]
  const { todos, saveTodos } = useLocalStorage('todos', defaulTodos);
  const completedTodos = todos?.filter(t => !!t.status).length;
  const totalTodos = todos?.length;
  const [searchValue, setSearchValue] = useState('');

  const searchedTodos = todos?.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  });

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const findIndex = newTodos.findIndex(t => t.id === id);
    newTodos[findIndex].status = !newTodos[findIndex].status;
    saveTodos(newTodos);
    if(newTodos.filter(todo => todo.status).length === totalTodos) {
      confetti.addConfetti({
        emojis: ['😀', '😉', '👌', '😮', '🤩', '😎'],
      })
    } 
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const findIndex = newTodos.findIndex(t => t.id === id);
    newTodos.splice(findIndex, 1);
    saveTodos(newTodos);
  } 
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <ActionBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todoItem) => { //* Cada elemento dentro de un array en react debe tener un Key diferente
          return <TodoItem key={todoItem.id} text={todoItem.text} status={todoItem.status ? 'Si' : 'No'} onDelete={() => deleteTodo(todoItem.id)} complete={() => completeTodo(todoItem.id)}/>
        })}
      </TodoList>
    </>
  );
}
export default App;
