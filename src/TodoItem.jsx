import './TodoItem.css';
function TodoItem({ text, status }) {
  return (
    <li className="todo-item">
      <div className='todo-left'>
        <span className={status === 'Si' ? 'todo-status-completed' : 'todo-status-pending'}>{status}</span>
        <p>{text}</p>
      </div>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
