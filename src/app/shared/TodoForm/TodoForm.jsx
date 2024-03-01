import './TodoForm.css';
import { PortalComponent } from '../../portals/PortalComponent';
import { useFormContext } from '../../context/FormContext';
const FormComponent = ({ isOpen }) => {
  const { closeForm, setInputValue, addTodo, inputValue,  } = useFormContext();
  const handleClick = () => {
    closeForm();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue(''); 
    closeForm();
  }

  if (!isOpen) return null;
  return (
    <PortalComponent>
      <div className="modal">
        <form className="modal-content">
          <header>
            <h2>Nueva tarea</h2>
            <button
              className="close-button"
              onClick={handleClick}>
              X
            </button>
          </header>
          <div className="inputs">
            <input
              required
              type="text"
              className="text-input"
              onChange={handleChange}
              value={inputValue}
            />
            <button
              className="add-button"
              onClick={handleAddTodo}>
              Agregar
            </button>
          </div>
        </form>
      </div>
    </PortalComponent>
  );
};

export { FormComponent };
