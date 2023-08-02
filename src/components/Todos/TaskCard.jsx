import {
  faPencil,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actions } from './actions';

const TaskCard = ({ task, dispatch, setIsEditing }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        class='card border-light-subtle mb-3'
        style={{
          minWidth: '25rem',
          backgroundColor: task.isCompleted ? '#39682c' : '',
        }}
      >
        <div class='card-body'>
          <p class='card-text'>{task.name}</p>
        </div>
      </div>
      <div className='mx-2'>
        {!task.isCompleted && (
          <button
            className='mx-1 btn border-bottom shadow px-4 py-2'
            style={{ minHeight: '3.5rem' }}
            onClick={() => dispatch(actions.COMPLETED(task.id))}
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              beat
              style={{ color: '#39682c' }}
            />
          </button>
        )}
        {!task.isCompleted && (
          <button
            className='mx-1 btn border-bottom shadow px-4 py-2'
            style={{ minHeight: '3.5rem' }}
            onClick={() => setIsEditing(task)}
          >
            <FontAwesomeIcon icon={faPencil} beat />
          </button>
        )}
        <button
          className='ms-1 btn shadow px-4 py-2'
          style={{ color: '#cb0b0b', minHeight: '3.5rem' }}
          onClick={() => dispatch(actions.DELETE(task.id))}
        >
          <FontAwesomeIcon icon={faTrash} beat />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
