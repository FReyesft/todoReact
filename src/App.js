import { ActionBar } from './ActionBar';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

const defaultTodos = [
  { id: 1, text: 'Vender Marihuana', completed: false },
  { id: 2, text: 'Vender Panela', completed: true },
  { id: 3, text: 'Vender Empanadas', completed: false },
  { id: 4, text: 'Vender Agua', completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20} />
      <ActionBar/>
      <TodoList>
        {defaultTodos.map((todoItem) => { //* Cada elemento dentro de un array en react debe tener un Key diferente
          return <TodoItem key={todoItem.id} text={todoItem.text} status={todoItem.completed ? 'Si' : 'No'} />
        })}
      </TodoList>
    </>
  );
}
export default App;
