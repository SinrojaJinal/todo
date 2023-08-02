import { useEffect, useState } from 'react';
import { actions } from './actions';
import { toast } from 'react-toastify';

const toastOptions = {
  autoClose: 500,
  className: '',
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  delay: 5,
};

const AddTodos = ({ dispatch, isEditing, setIsEditing }) => {
  const [taskName, setTaskName] = useState();

  useEffect(() => {
    setTaskName(isEditing?.name);
  }, [isEditing]);

  const handleAdd = () => {
    if (!taskName) {
      toast.error('Please Enter Task', toastOptions);
    } else {
      dispatch(actions.ADD(taskName));
      setTaskName('');
    }
  };

  const handleEdit = () => {
    dispatch(actions.EDIT({ ...isEditing, name: taskName }));
    setIsEditing();
    setTaskName('');
  };

  return (
    <section>
      <div className='fw-bold fs-1'>Let's do it!!!</div>
      <div className='d-flex justify-content-center'>
        <input
          className='form-control w-25 mx-2'
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className='btn btn-primary px-4 py-2'
          onClick={isEditing ? handleEdit : handleAdd}
        >
          {isEditing ? 'Edit' : 'Add'}
        </button>
      </div>
    </section>
  );
};

export default AddTodos;
