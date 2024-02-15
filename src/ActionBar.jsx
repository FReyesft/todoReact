import { TodoCreateButton } from './TodoCreateButton';
import { TodoFilter } from './TodoFilter';
import './ActionBar.css'
function ActionBar() {
  return (
    <>
      <div className='action-bar'>
        <TodoFilter />
        <TodoCreateButton />
      </div>
    </>
  );
}

export { ActionBar };
