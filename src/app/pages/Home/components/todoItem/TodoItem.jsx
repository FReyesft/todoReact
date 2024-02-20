import './TodoItem.css';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
function TodoItem({ text, status, complete, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <span
          onClick={complete}
          className={
            status === 'Si'
              ? 'todo-status-completed'
              : 'todo-status-pending'
          }>
          <FaCheck />
        </span>
        <p>{text}</p>
      </div>
      <span
        className="button-delete"
        onClick={onDelete}>
        <FaXmark />
      </span>
    </li>
  );
}

export { TodoItem };
