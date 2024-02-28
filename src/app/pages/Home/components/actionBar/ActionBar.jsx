import { TodoCreateButton } from './components/createTodoButton/TodoCreateButton';
import { TodoFilter } from './components/todoFilter/TodoFilter';
import './ActionBar.css'
function ActionBar({searchValue, setSearchValue}) {
  return (
    <>
      <div className='action-bar'>
        <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoCreateButton />
      </div>
    </>
  );
}

export { ActionBar };
