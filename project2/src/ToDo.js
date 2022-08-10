import LogoTodo from "./img_todo";

function ToDo({ todo, removeTask, toggleTask }) {
  return (
    <div key={todo.key} className="item-todo">
      <div
        className={todo.completed ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        <button className="bittonDelete">
          <LogoTodo />
        </button>
      </div>
    </div>
  );
}
export default ToDo;
