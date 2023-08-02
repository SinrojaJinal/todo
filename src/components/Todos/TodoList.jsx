import TaskCard from "./TaskCard";

const TodoList = ({todos, dispatch, setIsEditing}) => {
  return (
    <section className="mt-5">
      {
        todos.map((task) => <TaskCard key={task.id} task={task} dispatch={dispatch} setIsEditing={setIsEditing}/>)
      }
    </section>
  );
};

export default TodoList;
