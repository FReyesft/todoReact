import './App.css';
import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { ActionBar } from './components/ActionBar/ActionBar';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import jsConfetti from 'js-confetti';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const confetti = new jsConfetti();

function App() {
  const { todos, saveTodos, loading } = useLocalStorage('todos', []);
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
    if (newTodos.filter(todo => todo.status).length === totalTodos) {
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
        { loading && <p>Cargando...</p> }
        { !loading && !searchedTodos.length && <p>Agrega nuevos TODOs</p>}
        { !loading && searchedTodos.map((todoItem) => { //* Cada elemento dentro de un array en react debe tener un Key diferente
          return <TodoItem key={todoItem.id} text={todoItem.text} status={todoItem.status ? 'Si' : 'No'} onDelete={() => deleteTodo(todoItem.id)} complete={() => completeTodo(todoItem.id)} />
        })}
      </TodoList>
    </>
  );
}
export default App;
