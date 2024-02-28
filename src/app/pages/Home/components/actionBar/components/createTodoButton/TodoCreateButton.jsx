import './TodoButton.css';
import { useFormContext } from '../../../../../../context/FormContext';
function TodoCreateButton() {
  const { openForm } = useFormContext();
  const handleClick = () => {
    openForm();
  };
  return (
    <button
      className="todo-button"
      onClick={handleClick}>
      Nuevo
    </button>
  );
}
export { TodoCreateButton };
