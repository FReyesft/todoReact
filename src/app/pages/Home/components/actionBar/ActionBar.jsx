import { TodoCreateButton } from './components/CreateTodoButton/TodoCreateButton';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
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
