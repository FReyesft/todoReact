import './App.css';
import { useState } from 'react';
import { TodoCounter } from './components/todoCounter/TodoCounter';
import { ActionBar } from './components/actionBar/ActionBar';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FormComponent } from '../../shared/TodoForm/TodoForm';
import { useFormContext } from '../../context/FormContext';
function App() {
  const { loading } = useLocalStorage('todos', []);
  const { isFormVisible, completeTodo, todos, deleteTodo } = useFormContext();
  console.log('todos', todos);
  const completedTodos = todos?.filter(t => !!t.status).length;
  const totalTodos = todos?.length;
  const [searchValue, setSearchValue] = useState('');
  const searchedTodos = todos?.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  });

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <ActionBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Agrega nuevos TODOs</p>}
        {!loading && searchedTodos.map((todoItem) => { //* Cada elemento dentro de un array en react debe tener un Key diferente
          return <TodoItem key={todoItem.id} text={todoItem.text} status={todoItem.status ? 'Si' : 'No'} onDelete={() => deleteTodo(todoItem.id)} complete={() => completeTodo(todoItem.id)} />
        })}
      </TodoList>
      <FormComponent isOpen={isFormVisible}></FormComponent>
    </>
  );
}
export default App;
