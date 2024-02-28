import './TodoForm.css';
import { PortalComponent } from '../../portals/PortalComponent';
import { useFormContext } from '../../context/FormContext';
const FormComponent = ({ isOpen }) => {
  const { closeForm } = useFormContext();
  const handleClick = () => {
    closeForm();
  };
  if (!isOpen) return null;
  return (
    <PortalComponent>
      <div className="modal">
        <form className="modal-content">
          <header>
            <h2>Nueva tarea</h2>
            <button className='close-button' onClick={handleClick}>X</button>
          </header>
          <div className='inputs'>
            <input type="text" className='text-input'/>
            <button className='add-button'>Agregar</button>
          </div>
        </form>
      </div>
    </PortalComponent>
  );
};

export { FormComponent };
