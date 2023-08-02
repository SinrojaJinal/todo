import React, { useReducer, useState } from 'react';
import './App.css';
import AddTodos from './components/Todos/AddTodo';
import TodoList from './components/Todos/TodoList';
import { nanoid } from '@reduxjs/toolkit';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const completedTask = state.filter((el) => el.isCompleted);
      const notCompletedTask = state.filter((el) => !el.isCompleted);
      return [
        ...notCompletedTask,
        { name: action.taskName, id: nanoid() },
        ...completedTask,
      ];
    }
    case 'EDIT': {
      const updateThisIndex = state.findIndex(
        (el) => el.id === action.taskPayload.id
      );
      const updatedArr = [...state];
      updatedArr[updateThisIndex] = action.taskPayload;
      return updatedArr;
    }
    case 'COMPLETED': {
      const updateThisIndex = state.findIndex((el) => el.id === action.taskId);
      const updatedArr = [
        ...state.slice(0, updateThisIndex),
        ...state.slice(updateThisIndex + 1, state.length),
        { ...state[updateThisIndex], isCompleted: true },
      ];
      return updatedArr;
    }
    case 'DELETE':
      return state.filter((el) => el.id !== action.taskId);
    default:
      break;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [isEditing, setIsEditing] = useState();

  return (
    <div className='App mt-5'>
      <AddTodos
        isEditing={isEditing}
        dispatch={dispatch}
        setIsEditing={setIsEditing}
      />
      <TodoList todos={todos} dispatch={dispatch} setIsEditing={setIsEditing} />
    </div>
  );
}

export default App;
